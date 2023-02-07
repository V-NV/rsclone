import { JavaScript } from "../JavaScript/javascript";

export function javascriptOn() {
  const about = document.querySelector('.present-midle-js-box') as HTMLElement;
    about.addEventListener('click',() => {
      JavaScript();
    }
)}