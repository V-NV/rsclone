import Cookies from "js-cookie";
import { IRegisterData, IToken, TLoginUser } from "../../types/api.interface";
// import { webStorage } from "../Storage/webStorage";
import { getLogout } from "../View/logout";

export const TEST_URL = "http://localhost:7000";

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
    : console.log("Use is login");
  return resp.status === 201 ? { ...(await resp.json()) } : false;
};

export const getUserIsLogin = async () => {
  const user = Cookies.get("user_session");
  if (user) {
    try {
      const resp = await fetch(`${TEST_URL}/auth/login-user`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${user}`,
        },
      });
      return resp.status === 201 ? true : false;
    } catch (error) {
      getLogout();
      console.error("Сеть не доступна");
      return false;
    }
  }
};

// export const getUserLogin = async () => {
//   try {
//     const user = await getUserIsLogin();
//     if (user) {
//       webStorage.user_storage.user_session = `${Cookies.get("user_session")}`;
//       webStorage.user_storage.username = `${Cookies.get("username")}`;
//       webStorage.user_storage.user_login = true;
//     }
//   } catch (error) {
//     console.log("Сеть не доступна");
//   }
// };
