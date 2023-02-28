import Cookies from "js-cookie";
import { errorMessage, getUserIsLogin } from "../Api/register-login.api";
import { setNewUserPost } from "../Api/user-post.api";
import { getUpdateStorage } from "../Storage/webStorage";

export const Modal = () => {
  const modal = document.querySelector(".modal") as HTMLElement;
  modal.innerHTML = "";
  modal.innerHTML = `
  <div class="modal-button" data-title="Log in and add your review!">
  <svg xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 980 726">
    <path d="M465 .6c-16.6.7-43.7 2.5-57.5 4C214 24.8 61 115.1 14.5 236.5-13.9 310.7.1 390.3 53.6 458a497.8 497.8 0 0 0 64.3 61.9A904 904 0 0 1 86.3 546l-36.9 30-8.7 7.2c-8.3 6.7-14.5 27.8-13.4 45.2 1 16.7 5.1 24.8 23.9 48.4 30.4 37.9 41 44.6 70.4 44.4 15.6-.1 20.8-1.7 29.9-9L266 619.4l23.5-19.1 19.4 4.9a767.6 767.6 0 0 0 241.7 19.3l18.1-1.5 12.4 12.3A302.3 302.3 0 0 0 737 719.4c33.8 6.8 69.9 7.8 114.2 3.2l27.2-2.6c.9 0 1.6-.4 1.6-.9s-15.3-38.7-34.1-84.8c-25.9-63.7-33.7-84-32.7-84.6 111.2-63 170.5-150.2 166.4-244.7a212 212 0 0 0-23-88.5C919.1 140 835.9 75.5 726.5 38A697 697 0 0 0 548.8 2.5C529.4 1.1 480.9 0 465 .6zM542 65c121.1 9.6 229.3 48.9 300 109 39.1 33.1 63.4 70.7 72.2 111.4 2.9 13.6 3.2 41.6.5 55.1-10.4 51.4-46 98.2-104.2 137a473 473 0 0 1-59.4 33.2c-15.6 7.5-19.2 9.6-18.7 10.9l28.6 70.5c15.4 37.8 28 69.2 28 69.6 0 1.7-24.8-.9-41-4.2-55.9-11.4-102.1-40.2-142.4-88.8-11.1-13.3-9.1-12.5-26.2-10.3-29.9 4-49.6 5.1-88.9 5a551 551 0 0 1-93.9-6c-16.1-2.3-43.6-7-44.2-7.7-.3-.3 183.3-149.1 191-154.8 3.4-2.5 7.8-6.8 9.8-9.5 5.4-7.4 88.8-152.8 91.5-159.6 8.2-20.2-.7-31.6-21.7-28a5657 5657 0 0 0-173 55.9c-7.8 3.2-.5-2.5-87.7 68.3a19095 19095 0 0 1-191.4 154.8c-1.6.6-22.9-15.2-36.5-27.2-37.3-32.6-59.7-67.7-68.6-107.8a105 105 0 0 1-2.2-28.3c0-20.4 1.7-30.4 8-48.6 30.7-88.3 145-162.5 293.4-190.3 29.1-5.5 56.6-8.6 96.5-11 11-.7 66.8.3 80.5 1.4zm25.2 234a3416.7 3416.7 0 0 1-36.4 62.4c-1.4.3-65.5-79.9-64.4-80.5.6-.4 16.4-5.6 35.1-11.7l67.5-21.9a956.5 956.5 0 0 1 33.8-10.8c.1.1-15.9 28.2-35.6 62.5zM484 381c3 3.9 5.5 7.4 5.5 7.9A9934 9934 0 0 1 305.9 538a148 148 0 0 1-21.8-6.9c0-.3 20.1-16.8 44.6-36.6l96.6-78.3c28.6-23.2 52.3-42.2 52.6-42.1.3 0 3.1 3.1 6.1 6.9zM173.7 585l32.6 40.6c.4.7-8.3 8.5-22.4 19.9a494.4 494.4 0 0 1-23.3 18.4c-.2-.2-1.1-2.7-2-5.4-2.8-8.6-8.8-17.7-25.9-38.7-18.3-22.6-24.5-29.2-32.9-34.6-3.2-2-5.7-4.1-5.5-4.5.1-.5 10.4-9.1 22.7-19.2 17-13.9 22.8-18.1 23.6-17.2l33.1 40.7zm62.6-2.3c5.3 2 9.7 3.9 9.7 4.3 0 .3-4 3.9-9 7.8l-8.9 7.2-6.2-7.7-6.3-7.6 4.5-3.9c2.4-2.1 4.9-3.8 5.4-3.8a89 89 0 0 1 10.8 3.7z"/>
  </svg>
  </div>

  <div class="modal-container">
  <div class="modal-bg"></div>
    <div class="modal-form signin-form-cont">
      <form class="form form-modal" id="form">
        <h3>Send us your feedback</h3>
        <div class="form-control">
          <label for="img-url">Link to your photo (URL)</label>
          <input type="text" id="img-url" placeholder="Link to your photo" autocomplete="off" minlength="20"/>
        </div>

        <div class="form-control">
          <label for="title">Title</label>
          <input type="text" id="title" placeholder="Your title" autocomplete="off" minlength="5"/>
        </div>

        <div class="form-control">
          <label for="post">Your feedback</label>
          <input type="text" id="post" placeholder="Your feedback" autocomplete="off" size="45" minlength="10"/>
        </div>
        <small class="error-massage"></small>
        <button type="submit" class="form-button" id="form-button">Post your message!</button>
      </form>
    </div>
  </div>`;
  setModalButton();
  setModalListener();
};

const setModalButton = async () => {
  const modalButton = document.querySelector(".modal-button") as HTMLElement;
  const modalBg = document.querySelector(".modal-bg") as HTMLElement;
  modalBg.addEventListener("click", setModal);
  const login = await getUserIsLogin();
  login ? modalButton.classList.toggle("active") : null;

  modalButton.addEventListener("click", async () => {
    login ? setModal() : null;
  });
};
const setModal = () => {
  const modalBg = document.querySelector(".modal-bg") as HTMLElement;
  const modalContainer = document.querySelector(
    ".modal-container"
  ) as HTMLElement;
  modalBg.classList.toggle("active");
  modalContainer.classList.toggle("modal-active");
};
export const setModalListener = () => {
  const imgUrl = document.getElementById("img-url") as HTMLInputElement;
  const title = document.getElementById("title") as HTMLInputElement;
  const post = document.getElementById("post") as HTMLInputElement;
  const formModal = document.querySelector(".form-modal") as HTMLFormElement;

  formModal.addEventListener("submit", async (e: SubmitEvent) => {
    e.preventDefault();
    const status = await setNewUserPost({
      username: `${Cookies.get("username")}`,
      imgUrl: imgUrl.value,
      title: title.value,
      post: post.value,
    });

    if (status) {
      setTimeout(async () => {
        setModal();
        (imgUrl.value = ""), (title.value = ""), (post.value = "");
        await getUpdateStorage();
      }, 2000);
    } else {
      errorMessage("Пользователь не зарегистрирован");
      console.log("Пользователь не зарегистрирован");
      Cookies.remove("user_session");
      Cookies.remove("username");
      // setTimeout(() => location.reload(), 1000);
    }
  });
};
