import logo from "../../assets/img/header/logo-black.png";
import { AboutOn } from "../View/aboutOn";
import { CoursesOn } from "../View/coursesOn";
import { logoOn } from "../View/logoOn";
import { SignUpOn } from "../View/signupOn";
import { SignInOn } from "../View/signinOn";
//import logo from "../../assets/img/logo.png";
//import { AboutContent,AboutOn } from "./about";
export function Header(): void {
  const Header = document.querySelector("header") as HTMLBodyElement;
  Header.className = "header-wrap";
  Header.innerHTML += "";
  Header.innerHTML += `
  <div class="header">
    <div class="header-cont">
      
      <div class="header-btn-cont-left">
        <div class="logo-box">
            <img class="logo" src="${logo}" alt="logo">
          </div>
        <div class="header-btn discription">COURSES</div>
        
        <div class="header-btn about">ABOUT</div>
      </div>
      <div class="header-btn-cont-right">
        <div class="header-btn signin">SIGN IN</div>
        <div class="header-btn signup">SIGN UP</div>
        <div class="header-btn lang">EN</div>
      </div>
      
    </div>
    <hr>
  </div>
`;
  AboutOn();
  CoursesOn();
  logoOn();
  SignUpOn();
  SignInOn();
}

/*`
    <header class="header">
      <div class="header-cont">
        <div class="logo-box">
          <img class="logo" src="${logo}" alt="logo">
        </div>
        <div class="header-btn-cont-left">
          <div class="header-btn discription">Описание</div>
          
          <div class="header-btn about">О нас</div>
        </div>
        <div class="header-btn-cont-right">
          <div class="header-btn">Вход</div>
          <div class="header-btn">Регистрация</div>
          <div class="header-btn">RU/EN</div>
        </div>
      </div>
    </header>
  `;
  AboutContent();
  AboutOn();
}
*/