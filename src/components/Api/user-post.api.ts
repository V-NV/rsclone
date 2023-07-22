import Cookies from "js-cookie";
import { IWebStorageUserData, TUserPostSend } from "../../types/api.interface";

export const getUserPost = async () => {
  try {
    const resp = await fetch(
      `https://backend-for-rsclone-production.up.railway.app/user-post`
    );
    const userPostData: IWebStorageUserData = {
      userPost: await resp.json(),
    };
    return userPostData;
  } catch (error) {
    const userPostData: IWebStorageUserData = {
      userPost: undefined,
    };
    return userPostData;
  }
};

export const setNewUserPost = async (body: TUserPostSend) => {
  const user = Cookies.get("user_session");
  if (user) {
    try {
      const resp = await fetch(
        "https://backend-for-rsclone-production.up.railway.app/user-post/postNewPost",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user}`,
          },
          body: JSON.stringify(body),
        }
      );
      return resp.status === 201 ? true : false;
    } catch (error) {
      Cookies.remove("user_session");
      Cookies.remove("username");
      setTimeout(() => location.reload(), 1000);
      console.error("Сеть не доступна");
      return false;
    }
  }
};

export const deleteUserPost = async (id: string) => {
  const user = Cookies.get("user_session");
  if (user) {
    try {
      const resp = await fetch(
        `https://backend-for-rsclone-production.up.railway.app/user-post/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${user}`,
          },
        }
      );
      return resp.status === 200 ? true : false;
    } catch (error) {
      console.log(error);
    }
  }
};

export const isAdmin = async () => {
  const user = Cookies.get("user_session");
  if (user) {
    try {
      const resp = await fetch(
        `https://backend-for-rsclone-production.up.railway.app/auth/is-admin`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${user}`,
          },
        }
      );
      return resp.status === 201 ? true : false;
    } catch (error) {
      console.log(error);
    }
  }
};
