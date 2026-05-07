import { FetchError } from "ofetch";
import { authService } from "~~/server/services/auth.service";

export default defineEventHandler(async (event) => {
  const { email, password } = await readBody(event);
  try {
    const { login } = authService();
    const res = await login(event, { email, password });
    return res;
  } catch (error) {
    const err = error as FetchError;
    throw createError({
      statusCode: 200,
      statusMessage: (err.cause as any)?.statusMessage,
      data: { errorCode: "auth/invalid-credentials" },
    });
  }
});
