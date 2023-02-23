import { IWebStorageUserData } from "../../types/api.interface";

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
