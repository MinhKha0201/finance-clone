import type { LoginPayload } from "~~/shared/schema/auth.schema";
import { authService } from "../services/auth.service";

export const useAuth = () => {
  const accessToken = useCookie<string | null>("auth.access_token", {
    maxAge: 60 * 60 * 24 * 7, // 7 days
    sameSite: "lax",
    secure: true,
    path: "/",
  });
  // const refreshToken = useCookie<string | null>("refreshToken", {
  //   maxAge: 60 * 60 * 24 * 7, // 7 days
  //   sameSite: "lax",
  //   secure: true,
  //   path: "/",
  // });

  const isLoading = ref(false);

  const service = authService();

  const isAuthenticated = computed(() => !!accessToken.value);

  const login = async (payload: LoginPayload) => {
    isLoading.value = true;
    const res = await service.login(payload).finally(() => {
      isLoading.value = false;
    });

    return navigateTo("/");
  };

  const loginByHrm = async (code: string) => {
    const res = await service.loginByHrm(code);
    return navigateTo("/");
  };

  const logout = async () => {
    await service.logout();
    clearTokens();
    return navigateTo("/login");
  };

  const refresh = async () => {};

  const clearTokens = () => {};

  const setToken = (aToken: string, rToken: string) => {};

  return {
    accessToken,
    isAuthenticated,
    isLoading,
    login,
    logout,
    loginByHrm,
    clearTokens,
    refresh,
    setToken,
  };
};
