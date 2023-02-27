import logo from "../../assets/img/header/logo-black.png";
//import { AboutOn } from "../View/aboutOn";
//import { CoursesOn } from "../View/coursesOn";
import { logoOn } from "../View/logoOn";
//import { SignUpOn } from "../View/signupOn";
//import { SignInOn } from "../View/signinOn";
// import { getUserLogin } from "../Api/register-login.api";
import Cookies from "js-cookie";
// import { getLogout } from "../View/logout";
/*import { AboutPage } from "../About/about";
import { Main } from "../Main/Main";
import { SignIn } from "../Signin/signin";
import { SignUp } from "../Signup/signup";*/
import { Root } from "../Routing/root";
import { AdminPage } from "../AdminPage/AdminPage";
import { isAdmin } from "../Api/user-post.api";
import { getLogout } from "../View/logout";
//import { FullIde } from "../Fullide/fullide";

//import logo from "../../assets/img/logo.png";
//import { AboutContent,AboutOn } from "./about";
export function Header() {
  const Header = document.querySelector("header") as HTMLBodyElement;

  Header.className = "header-wrap";
  Header.innerHTML += "";
  Header.innerHTML += `
  <div class="header">
    <div class="header-cont">

      <div class="header-btn-cont-left" id="app">
        <div class="logo-box" id="ptn">
        <a href="#"><img class="logo flare" src="${logo}" alt="logo"></a>
        </div>
       <a href="#"><div class="header-btn discription">COURSES</div></a>

       <a href="#about"><div class="header-btn about">ABOUT</div></a>

       <a href="#sandbox"><div class="header-btn sandbox">SANDBOX</div></a>
      </div>
      <div class="header-btn-cont-right">
      ${
        Cookies.get("username")
          ? `<a href="#admin-page"><div class="header-btn username">${Cookies.get(
              "username"
            )}</div></a>
          <div class="header-btn logout">Logout</div>`
          : `<a href="#signin"><div class="header-btn signin">SIGN IN</div></a>
          <a href="#signup"><div class="header-btn signup">SIGN UP</div></a>`
      }

        <div class="header-btn theme"></div>
      </div>
      
    </div>
    <hr>
  </div>
`;
  //AboutOn();
  //CoursesOn();
  logoOn();
  //SignUpOn();
  //SignInOn();
  getUserRole();
  Root();
  getLogout();
  //FullIde();
}

const getUserRole = () => {
  const userName = document?.querySelector(".username") as HTMLDivElement;
  userName?.addEventListener("click", async () => {
    const admin = await isAdmin();
    admin ? AdminPage() : null;
    // await AdminPage();
  });
};

/*
function SetHref(){
  const Cour = document.querySelector('.discription') as HTMLElement;
  const Abou = document.querySelector('.about') as HTMLElement;
  Cour.addEventListener('click',()=>{
    Cour.href = 'course';
  })
  Abou.addEventListener('click',()=>{
    document.location.href = '1'
  })
}*/
/*
enum Page{
  CoursesOn = 'courses',
  AboutOn = 'about',
  SignInOn = 'signin',
  SignUpOn = 'signup',

}*/

/*


  // getUserLogin();
}

// const checkLogin = () => {
//   getUserLogin();
//   if (webStorage.user_storage.user_login) {
//     const headerButton = document?.querySelector(".header-btn-cont-right");
//     // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
//     headerButton!.innerHTML = "";
//     // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
//     headerButton!.innerHTML = `<div class="header-btn">${webStorage.user_storage.username}</div>
//     <div class="header-btn logout">Logout</div>`;
//   }
// };
// ${
//   (await getUserIsLogin())
// ? `<div class="header-btn">${Cookies.get("username")}</div>
// <div class="header-btn logout">Logout</div>`
//     : `<div class="header-btn signin">SIGN IN</div>
// <div class="header-btn signup">SIGN UP</div>`
// }
*/
