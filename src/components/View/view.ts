export function View(): void {
  const Body = document.querySelector("body") as HTMLBodyElement;

  const Present = document.createElement("section");
  Body.insertAdjacentElement("afterbegin", Present);
  Present.className = "present";
  Present.style.display = "none";

  const Header = document.createElement("header");
  Body.insertAdjacentElement("beforeend", Header);

  const Main = document.createElement("main");
  Body.insertAdjacentElement("beforeend", Main);

  const Footer = document.createElement("footer");
  Body.insertAdjacentElement("beforeend", Footer);
}
