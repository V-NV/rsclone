export const Modal = () => {
  const modal = document.querySelector(".modal") as HTMLElement;
  modal.innerHTML = "";
  modal.innerHTML = `  <div class="modal-button"></div>
  <div class="modal-container">
    <div class="modal-form signin-form-cont">
      <form class="form" id="form">
        <h3>Отправьте нам ваш отзыв!</h3>
        <div class="form-control">
          <label for="img-url">Ссылка на картинку</label>
          <input type="text" id="img-url" placeholder="ссылка на картинку" autocomplete="off" />
        </div>

        <div class="form-control">
          <label for="username"> Имя для отзыва</label>
          <input type="text" id="username" placeholder="Введите имя" autocomplete="off" />
        </div>

        <div class="form-control">
          <label for="password"> Ваш отзыв</label>
          <input type="text" id="password" placeholder="Введите отзыв" autocomplete="off" size="45" />
        </div>
        <button type="submit" class="form-button" id="form-button">Отправить отзыв!</button>
      </form>
    </div>
  </div>`;
  setModalButton();
};

const setModalButton = () => {
  const modalButton = document.querySelector(".modal-button") as HTMLElement;
  modalButton.addEventListener("click", () => {
    const modalContainer = document.querySelector(
      ".modal-container"
    ) as HTMLElement;
    modalContainer.classList.toggle("modal-active");
  });
};
