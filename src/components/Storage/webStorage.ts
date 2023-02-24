import { IWebStorageUserData } from "../../types/api.interface";
import { getUserPost } from "../Api/user-post.api";
import { ReviewTemplate, DataTest } from "../Main/ReviewTemplate";
window.addEventListener("load", async () => {
  const { userPost } = await getUserPost();
  webStorage.userPost = userPost;
  webStorage.userPost === undefined
    ? ReviewTemplate(DataTest)
    : ReviewTemplate(webStorage.userPost);
});
const userPost = undefined;
// const { userPost: userPost } = await getUserPost();
export const webStorage: IWebStorageUserData = {
  // user_storage: {
  //   username: "",
  //   user_session: "",
  //   user_login: false,
  // },
  userPost,
};
