import { Main } from "../Main/Main";

export function CoursesOn() {
  const about = document.querySelector(".discription") as HTMLElement;
  about.addEventListener("click", () => {
    Main();
  });
}
