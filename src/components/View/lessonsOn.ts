import { Lessons } from "../Lessons/lessons";

export function LessonsOn() {
  const about = document.querySelector('.js-basics-left') as HTMLElement;
    about.addEventListener('click',() => {
      Lessons();
    }
)}