import CourseTemplate from "./CourseTemplate";
import JSGif from "../../assets/img/js/js-intro.gif";
import JSLogo from "../../assets/img/js/js-logo.png";
import jsTasks from "../tasksData/jsTasks/jsTasks";
import { Lessons } from "../Lessons/lessons";
import { Main } from "../Main/Main";

const courseInfo = {
  pathTitle: `JavaScript`,
  introTitle: `JavaScript: Perfect for beginners`,
  introText: `Programming learning is an interesting and exciting process.
  The syntax of the language is the simplest and shortest path,
  without which it is impossible to start. This free online JavaScript 
  course will introduce you to the basic concepts of the language. 
  Learn the basics and write your first JS programs.`,
  hours: 10,
  students: 985,
  lessons: 10,
  tasksTitle: `JavaScript Basics`,
  tasksDescription: `JavaScript is one of the most popular programming languages in the world. It is used to build interactive web pages, mobile applications, and in server-side development. You will learn JS from scratch, from the very beginning. The first module provides a launching pad for writing meaningful programs. We will find out how to write your first JS code.`,
};

export const javascriptPage = (): void => {
  const main = document.querySelector("main") as HTMLElement;
  main.innerHTML = "";
  main.innerHTML += CourseTemplate(JSGif, JSLogo, courseInfo, jsTasks);
  BtnContId();
  ChangeLesson();
  ToHome();
};
function BtnContId() {
  const a = document.querySelector("ul") as HTMLElement;
  a.id = "javascript";
}
function ChangeLesson() {
  const sjs = Array.from(document.querySelectorAll("li"));

  for (const el of sjs) {
    el.addEventListener("click", () => {
      Lessons(+el.id, "javascript");
    });
  }
}
function ToHome():void {
  const BtnHome = document.querySelector('.btnh') as HTMLElement;
  BtnHome.addEventListener('click',()=>{
    Main();
  })
}