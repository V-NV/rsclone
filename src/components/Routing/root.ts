import { AboutPage } from "../About/about";
import { Main } from "../Main/Main";
import { SignIn } from "../Signin/signin";
import { SignUp } from "../Signup/signup";
import { htmlPage } from "../pages/htmlPage";
import { cssPage } from "../pages/cssPage";
import { javascriptPage } from "../pages/javascriptPage";
import { Lessons } from "../Lessons/lessons";
import { page404 } from "./404";
import { FullIde } from "../Fullide/fullide";

export enum Page{
    Courses = 'courses',
    About = 'about',
    SignIn = 'signin',
    SignUp = 'signup',
    Html = 'html',
    Css = 'css',
    Js = 'javascript',
    SB = 'sandbox'
}
export function Root() {

window.addEventListener('hashchange',()=>{
    const hash = window.location.hash.slice(1);
   // console.log('hashchange', hash);
   let errCount = false;
    for (let i = 1; i <= 10; i += 1) {
      if(hash == `html/${i}`) {
        errCount = true;
         Lessons(i, "html");
      }
     else if(hash == `css/${i}`) {
      errCount = true;
         Lessons(i, "css");
      }
     else if(hash == `javascript/${i}`) {
      errCount = true;
         Lessons(i, "javascript");
      }
      
   } 
    if(hash == '') {
        Main();
      }
    else if(hash == Page.About) {
      errCount = true;
      AboutPage();
    }
    else if(hash == Page.SignIn) {
      errCount = true;
      SignIn();
    }
    else if(hash == Page.SignUp) {
      errCount = true;
      SignUp();
    }
    else if(hash == Page.Html) {
      errCount = true;
        htmlPage();
      }
      else if(hash == Page.Css) {
        errCount = true;
        cssPage();
      }
      else if(hash == Page.Js) {
        errCount = true;
        javascriptPage();
      }
      else if(hash == Page.SB) {
        errCount = true;
        FullIde();
      }
      else if(errCount == false) {
        page404();}
   })
}