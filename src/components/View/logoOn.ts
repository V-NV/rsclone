import { Main } from "../Main/Main";

export function logoOn() {
  const logo = document.querySelector('.black-logo') as HTMLElement;
    logo.addEventListener('click',() => {
      Main();
    }
)}