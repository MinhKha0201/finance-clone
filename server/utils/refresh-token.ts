import { LoginResponse } from "~~/shared/type/auth.type";
import { HTTPMethod } from "../constants";
import {
  deleteTokenFromCookie,
  getTokenFromCookie,
  setTokenForCookie,
} from ".";

export const refreshAndRetry = async <T>(
  event: any,
  path: string,
  options: any,
): Promise<T> => {
  const config = useRuntimeConfig(event);

  const { accessToken, refreshToken } = getTokenFromCookie(event);

  // không có refresh token
  if (!refreshToken) {
    throw createError({
      statusCode: 401,
      statusMessage: "Unauthorized",
    });
  }

  try {
    // gọi API refresh
    const response = await $fetch<LoginResponse>("/auth/refresh-token", {
      method: HTTPMethod.POST,
      baseURL: config.serverApi,
      body: {
        refreshToken,
        accessToken,
      },
    });

    setTokenForCookie(event, response.accessToken, response.refreshToken);

    // retry request cũ
    return await $fetch<T>(path, {
      baseURL: config.apiBase,
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${response.accessToken}`,
      },
    });
  } catch {
    // refresh fail -> logout
    deleteTokenFromCookie(event);

    throw createError({
      statusCode: 401,
      statusMessage: "Session expired",
    });
  }
};
