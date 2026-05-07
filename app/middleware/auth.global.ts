import { useAuth } from "~/modules/auth/composables/useAuth";

export default defineNuxtRouteMiddleware(async (to) => {
  const { isAuthenticated, clearTokens, accessToken } = useAuth();
  console.log(accessToken.value);
  const isAuthRoute = to.meta.auth;

  if (!isAuthRoute && isAuthenticated.value) {
    return navigateTo("/");
  }

  if (isAuthRoute && !isAuthenticated.value) {
    clearTokens();
    return navigateTo("/login");
  }
});
