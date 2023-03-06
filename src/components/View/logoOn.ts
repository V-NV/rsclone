import { Main } from "../Main/Main";
import { changeTheme } from "./changeTheme";

export function logoOn() {
  const logo = document.querySelector(".logo") as HTMLElement;
  logo.addEventListener("click", () => {
    Main();
    changeTheme();
  });
}
