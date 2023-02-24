import { AboutPage } from "../About/about";
import { Main } from "../Main/Main";
import { SignIn } from "../Signin/signin";
import { SignUp } from "../Signup/signup";
import { htmlPage } from "../pages/htmlPage";
import { cssPage } from "../pages/cssPage";
import { javascriptPage } from "../pages/javascriptPage";
import { Lessons } from "../Lessons/lessons";


enum Page{
    Courses = 'courses',
    About = 'about',
    SignIn = 'signin',
    SignUp = 'signup',
    Html = 'html',
    Css = 'css',
    Js = 'javascript',
}
export function Root() {

window.addEventListener('hashchange',()=>{
    const hash = window.location.hash.slice(1);
    console.log('hashchange', hash);
    if(hash == '/') {
        Main();
      }
    if(hash == Page.About) {
      AboutPage();
    }
    if(hash == Page.SignIn) {
      SignIn();
    }
    if(hash == Page.SignUp) {
      SignUp();
    }
    if(hash == Page.Html) {
        htmlPage();
      }
      if(hash == Page.Css) {
        cssPage();
      }
      if(hash == Page.Js) {
        javascriptPage();
      }
      for (let i = 0; i < 10; i += 1) {
         if(hash == `html/${i}`) {
            Lessons(i, "html");
         }
         if(hash == `css/${i}`) {
            Lessons(i, "css");
         }
         if(hash == `javascript/${i}`) {
            Lessons(i, "js");
         }


      }  
  })
}