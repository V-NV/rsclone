import { javascriptPage } from "../pages/javascriptPage";

export function javascriptOn() {
  const javascript = document.querySelector('#js') as HTMLElement;
    javascript.addEventListener('click',() => {
      javascriptPage();
    }
)}