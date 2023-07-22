import { htmlPage } from "../pages/htmlPage";

export function htmlOn() {
  const html = document.querySelector("#html") as HTMLElement;
  html.addEventListener("click", () => {
    htmlPage();
  });
}
