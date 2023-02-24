// import { IWebStorage } from "../../types/api.interface";
import { getUserPost } from "../Api/user-post.api";
// window.addEventListener("load", async () => {
//   webStorage.userPost = await getUserPost();
// });

const { userPost: userPost } = await getUserPost();
export const webStorage = {
  // user_storage: {
  //   username: "",
  //   user_session: "",
  //   user_login: false,
  // },
  userPost,
};
