import { authService } from "~~/server/services/auth.service";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { loginByHrm } = authService();
  try {
    const res = await loginByHrm(event, body);

    setTokenForCookie(event, res.accessToken, res.refreshToken);

    return {
      message: "Success",
    };
  } catch (error) {
    console.log(error);
    throw createError({
      statusCode: 200,
      statusMessage: "Invalid credentials",
      data: { errorCode: "auth/invalid-credentials", ...(error as any) },
    });
  }
});
