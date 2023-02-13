import { JavaScript } from "../pages/javascript";

export function javascriptOn() {
  const about = document.querySelector('.present-midle-js-box') as HTMLElement;
    about.addEventListener('click',() => {
      JavaScript();
    }
)}