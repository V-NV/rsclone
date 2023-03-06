import { Main } from "../Main/Main";
import { changeTheme } from "./changeTheme";

export function CoursesOn() {
  const about = document.querySelector(".discription") as HTMLElement;
  about.addEventListener("click", () => {
    Main();
    changeTheme();
  });
}
