import goose from "../../assets/img/stickers/sticker_03.gif";

export function page404(): void {
  const main = document.querySelector("main") as HTMLElement;
  main.innerHTML = "";
  main.innerHTML += `
  <section class="page-404-wrap">
    <div class="page-404-cont">
      <h2>Page not found</h2>
      <img class="img404" src="${goose}" alt="404">
      <a href="#"><p>Come back to main page</p></a>
    <div>
  </section>
`;
}
