import { LoginResponse } from "~~/shared/type/auth.type";
import { LoginPayload } from "~~/shared/schema/auth.schema";
import { HTTPMethod } from "../constants";
import { AUTH_API_ENDPOINT } from "../constants/api-endpoint/auth";

export const authService = () => {
  const login = async (event: any, payload: LoginPayload) => {};
  const loginByHrm = async (event: any, payload: { code: string }) => {
    const res = await serverApi<LoginResponse>(
      event,
      AUTH_API_ENDPOINT.LOGIN_BY_HRM,
      {
        method: HTTPMethod.POST,
        body: payload,
      },
    );

    return res;
  };
  const logout = async (event: any) => {
    return await serverApi<LoginResponse>(event, AUTH_API_ENDPOINT.LOGOUT, {
      method: HTTPMethod.POST,
    });
  };

  return {
    login,
    loginByHrm,
    logout,
  };
};
