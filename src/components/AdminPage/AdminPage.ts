import { IUserPost } from "../../types/api.interface";
import { deleteUserPost, getUserPost } from "../Api/user-post.api";
import { DataTest } from "../Main/ReviewTemplate";
import { webStorage } from "../Storage/webStorage";

export const AdminPage = async () => {
  const main = document.querySelector("main") as HTMLElement;
  main.innerHTML = "";
  main.innerHTML += `<section class="admin_page">
  <div class="admin_page-container">
    <h3 class="admin_page-title">Admin Page</h3>
    <div class="admin_page-delete-post-container">
    <form class="form form-admin" id="form">
    <div class="form-control">
      <label for="delete">Delete user post</label>
      <input class='admin-control' type="text" id="delete" placeholder="Delete by id" autocomplete="off"/>
    </div>
  <button type="submit" class="form-button admin-button" id="form-button">Delete post</button>
</form>   
    </div>
    <div class="admin_page-user-post-container"></div>
  </div>
</section> `;
  await renderAdminPost();
  setAdminForm();
};

export const adminUserPostRender = async (body: IUserPost[]) => {
  const userContainer = document.querySelector(
    ".admin_page-user-post-container"
  ) as HTMLElement;
  userContainer.innerHTML = "";
  userContainer.innerHTML = `
  <div class="user-post-container-title">User posts</div>
  <div class="user-posts">
  ${body
    .map((elem, index) => {
      return `<div class="user-post-id-container" id="${index}">
    <div class="user-post-id" id="${index}">User ID: ${elem._id}</div>
    <div class="user-post-username">User Name: ${elem.username}</div>
    <div class="review-img user-post-imgurl"><img src="${
      elem.imgUrl
    }" alt="reviewer"></div>
    <div class="user-post-title">User Title: ${elem.title}</div>
    <div class="user-post-post">User: ${elem.post}</div>
    <div class="user-post-data">Date: ${
      elem.createdAt === undefined ? null : new Date(elem.createdAt)
    }</div>
    </div>
    `;
    })
    .join("")}
  </div>`;
};

const renderAdminPost = async () => {
  const { userPost } = await getUserPost();
  webStorage.userPost = userPost;
  webStorage.userPost === undefined
    ? adminUserPostRender(DataTest)
    : adminUserPostRender(webStorage.userPost);
};

export const setAdminForm = () => {
  const adminForm = document.querySelector(".form-admin") as HTMLFormElement;
  const deleteInput = document.getElementById("delete") as HTMLInputElement;

  adminForm.addEventListener("submit", async (e: SubmitEvent) => {
    e.preventDefault();
    await deleteUserPost(deleteInput.value);
    await renderAdminPost();
    deleteInput.value = "";
  });
};
