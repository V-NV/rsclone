import { IRegisterData, IToken, TLoginUser } from "../../types/api.interface";

const TEST_URL = "http://localhost:7000";

export const registerUser = async (body: IRegisterData): Promise<boolean> => {
  const resp = await fetch(`${TEST_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  resp.status === 400
    ? await resp.json().then((item) => console.error(item.message))
    : console.log("Пользователь зарегистрирован");
  return resp.status === 400 ? false : true;
};

export const loginUser = async (body: TLoginUser): Promise<IToken> => {
  const resp = await fetch(`${TEST_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  resp.status === 401
    ? await resp.json().then((item) => console.error(item.message))
    : console.log("Пользователь зарегистрирован");
  return resp.status === 201 ? { ...(await resp.json()) } : false;
};
