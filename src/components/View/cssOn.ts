import { cssPage } from "../pages/cssPage";

export function cssOn() {
  const css = document.querySelector('#css') as HTMLElement;
    css.addEventListener('click', () => {
      cssPage();
    }
)}