export const changeTheme = () => {
  const body = document.querySelector("body") as HTMLElement;
  const theme = document.querySelector(".theme") as HTMLElement;
  const rsLogo = document.querySelector(".rss-logo") as HTMLElement;
  const introImg = document.querySelector(
    ".present-right-up-box"
  ) as HTMLElement;

  if (localStorage.getItem("theme") === "light") {
    body.classList.remove("dark");
    body.classList.add("light");
    theme?.classList.add("light");
    introImg?.classList.add("light");
    rsLogo?.classList.add("light");
  } else {
    body.classList.add("dark");
    body.classList.remove("light");
    theme?.classList.remove("light");
    introImg?.classList.remove("light");
    rsLogo?.classList.remove("light");
  }
};
