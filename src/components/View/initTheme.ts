import { changeTheme } from "./changeTheme";
import { themeOn } from "./themeOn";

export const initTheme = () => {
  window.onload = () => {
    if (localStorage.getItem("theme") === "light") {
      changeTheme();
    } else {
      localStorage.setItem("theme", "dark");
      changeTheme();
    }
    themeOn();
  };
};
