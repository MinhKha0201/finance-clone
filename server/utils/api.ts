import { getTokenFromCookie } from ".";
import { refreshAndRetry } from "./refresh-token";

export const serverApi = async <T = unknown>(
  event: any,
  path: string,
  options: any = {},
): Promise<T> => {
  const config = useRuntimeConfig(event);

  const { accessToken: token } = getTokenFromCookie(event);

  try {
    return (await $fetch(path, {
      baseURL: config.serverApi,
      ...options,
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
        ...(options.headers || {}),
      },
    })) as T;
  } catch (error) {
    if ((error as any)?.response?.status === 401) {
      console.log(
        "================= Server API Error ================= \n",
        (error as any)?.response?._data,
        "\n====================================================",
      );

      return await refreshAndRetry(event, path, options);
    }

    throw error;
  }
};
