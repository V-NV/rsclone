import { changeTheme } from "./changeTheme";
import { themeOn } from "./themeOn";

export const initTheme = () => {
  // window.addEventListener("load", () => {
  //   if (localStorage.getItem("theme") === "light") {
  //     changeTheme();
  //   } else {
  //     localStorage.setItem("theme", "dark");
  //     changeTheme();
  //   }
  //   themeOn();
  // });
  // window.onload = () => {
  //   if (localStorage.getItem("theme") === "light") {
  //     changeTheme();
  //   } else {
  //     localStorage.setItem("theme", "dark");
  //     changeTheme();
  //   }
  //   themeOn();
  // };
  if (localStorage.getItem("theme") === "light") {
    changeTheme();
  } else {
    localStorage.setItem("theme", "dark");
    changeTheme();
  }
  themeOn();
};
