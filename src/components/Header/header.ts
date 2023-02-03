import logo from "../../assets/img/logo.png";
export function Header ():void {
  const Header = document.querySelector('header') as HTMLBodyElement;
  Header.innerHTML += "";
  Header.innerHTML += `
    <header class="header">
      <div class="header-cont">
        <div class="logo-box">
          <img class="logo" src="${logo}" alt="logo">
        </div>
        <div class="header-btn-cont-left">
          <div class="header-btn">Курсы</div>
          <div class="header-btn">Категории</div>
          <div class="header-btn">О нас</div>
        </div>
        <div class="header-btn-cont-right">
          <div class="header-btn">Вход</div>
          <div class="header-btn">Регистрация</div>
          <div class="header-btn">RU/EN</div>
        </div>
      </div>
    </header>
  `
}