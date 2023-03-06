import { Lessons } from "../Lessons/lessons";
import { changeTheme } from "./changeTheme";

export function LessonsOn() {
  const about = document.querySelector(".task-item") as HTMLElement;
  about.addEventListener("click", () => {
    Lessons(2, "t");
    changeTheme();
  });
}
