import Cookies from "js-cookie";
import { getUserPost, setNewUserPost } from "../Api/user-post.api";
import { DataTest, ReviewTemplate } from "../Main/ReviewTemplate";
import { webStorage } from "../Storage/webStorage";

export const Modal = () => {
  const modal = document.querySelector(".modal") as HTMLElement;
  modal.innerHTML = "";
  modal.innerHTML = `  <div class="modal-button"></div>
  <div class="modal-container">
    <div class="modal-form signin-form-cont">
      <form class="form form-modal" id="form">
        <h3>Отправьте нам ваш отзыв!</h3>
        <div class="form-control">
          <label for="img-url">Ссылка на картинку</label>
          <input type="text" id="img-url" placeholder="ссылка на картинку" autocomplete="off" minlength="20"/>
        </div>

        <div class="form-control">
          <label for="title"> Имя для отзыва</label>
          <input type="text" id="title" placeholder="Введите имя" autocomplete="off"  minlength="5" />
        </div>

        <div class="form-control">
          <label for="post"> Ваш отзыв</label>
          <input type="text" id="post" placeholder="Введите отзыв" autocomplete="off" size="45"  minlength="30" />
        </div>
        <button type="submit" class="form-button" id="form-button">Отправить отзыв!</button>
      </form>
    </div>
  </div>`;
  setModalButton();
  setModalListener();
};

const setModalButton = () => {
  const modalButton = document.querySelector(".modal-button") as HTMLElement;

  modalButton.addEventListener("click", () => {
    setModal();
  });
};
const setModal = () => {
  const modalContainer = document.querySelector(
    ".modal-container"
  ) as HTMLElement;
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
      imgUrl: imgUrl.value,
      title: title.value,
      post: post.value,
    });

    if (status) {
      setTimeout(async () => {
        setModal();
        (imgUrl.value = ""), (title.value = ""), (post.value = "");
        const { userPost } = await getUserPost();
        webStorage.userPost = userPost;
        webStorage.userPost === undefined
          ? ReviewTemplate(DataTest)
          : ReviewTemplate(webStorage.userPost);
      }, 2000);
    } else {
      console.log("Пользователь не зарегистрирован");
      Cookies.remove("user_session");
      Cookies.remove("username");
      setTimeout(() => location.reload(), 1000);
    }
  });
};
