import type { LoginPayload } from "~~/shared/schema/auth.schema";
import type { LoginResponse } from "~~/shared/type/auth.type";

export const authService = () => {
  const login = async (payload: LoginPayload) => {
    const { $api } = useNuxtApp();
    const res = await $api<LoginResponse>("/api/auth/login", {
      method: "POST",
      body: payload,
    });

    return res;
  };

  const loginByHrm = async (code: string) => {
    const { $api } = useNuxtApp();
    const res = await $api<LoginResponse>("/api/auth/login-hrm", {
      method: "POST",
      body: {
        code,
      },
    });
    return res;
  };

  const logout = async () => {
    const { $api } = useNuxtApp();
    const res = await $api<LoginResponse>("/api/auth/logout", {
      method: "POST",
    });

    return res;
  };

  const refreshToken = async (payload: {
    accessToken: string;
    refreshToken: string;
  }) => {
    const { $api } = useNuxtApp();
    const res = await $api<LoginResponse>("/api/auth/refresh-token", {
      method: "POST",
      body: payload,
    });
    return res;
  };

  return { login, loginByHrm, logout, refreshToken };
};
