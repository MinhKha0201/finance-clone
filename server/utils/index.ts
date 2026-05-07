export const setTokenForCookie = (
  event: any,
  accessToken: string,
  refreshToken: string,
) => {
  const config = useRuntimeConfig();
  setCookie(event, "auth.access_token", accessToken, {
    httpOnly: false,
    secure: config.envNode === "production",
    sameSite: "lax",
    maxAge: 60 * 15, // 15 phút
    path: "/",
  });

  setCookie(event, "auth.refresh_token", refreshToken, {
    httpOnly: true,
    secure: config.envNode === "production",
    sameSite: "strict",
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  });
};

export const getTokenFromCookie = (event: any) => {
  return {
    accessToken: getCookie(event, "auth.access_token"),
    refreshToken: getCookie(event, "auth.refresh_token"),
  };
};

export const deleteTokenFromCookie = (event: any) => {
  deleteCookie(event, "auth.access_token");
  deleteCookie(event, "auth.refresh_token");
};
