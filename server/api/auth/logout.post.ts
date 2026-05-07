import { FetchError } from "ofetch";
import { authService } from "~~/server/services/auth.service";

export default defineEventHandler(async (event) => {
  const { logout } = authService();

  try {
    await logout(event);
    deleteTokenFromCookie(event);
    return {
      message: "Success",
    };
  } catch (error) {
    const err = error as FetchError;
    throw createError({
      statusCode: (err.cause as any)?.statusCode ?? 200,
      statusMessage: "Error",
      data: { errorCode: "auth/logout-failed" },
    });
  }
});
