import { changeTheme } from "./changeTheme";

export function themeOn() {
  const theme = document.querySelector(".theme") as HTMLElement;
  theme.addEventListener("click", (event) => {
    event.preventDefault;
    if (localStorage.getItem("theme") === "light") {
      localStorage.setItem("theme", "dark");
      changeTheme();
    } else if (localStorage.getItem("theme") === "dark") {
      localStorage.setItem("theme", "light");
      changeTheme();
    }
  });
}
