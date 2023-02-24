import Cookies from "js-cookie";
import { IWebStorageUserData, TUserNewPost } from "../../types/api.interface";

export const getUserPost = async () => {
  try {
    const resp = await fetch(`http://localhost:7000/user-post`);
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

export const setNewUserPost = async (body: TUserNewPost) => {
  const user = Cookies.get("user_session");
  if (user) {
    try {
      const resp = await fetch("http://localhost:7000/user-post/postNewPost", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user}`,
        },
        body: JSON.stringify(body),
      });
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
