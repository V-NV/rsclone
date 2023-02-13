import { JavaScript } from "../pages/javascript";

export function javascriptOn() {
  const javascript = document.querySelector('.card-3') as HTMLElement;
    javascript.addEventListener('click',() => {
      JavaScript();
    }
)}