import CourseTemplate from "./CourseTemplate";
import JSGif from "../../assets/img/js/js-intro.gif";
import JSLogo from "../../assets/img/js/js-logo.png";
import jsTasks from "../tasksData/jsTasks/jsTasks";
import { Lessons } from "../Lessons/lessons";

const courseInfo = {
  introTitle: `JavaScript: Perfect for beginners`,
  introText: `Programming learning is an interesting and exciting process.
  The syntax of the language is the simplest and shortest path,
  without which it is impossible to start. This free online JavaScript 
  course will introduce you to the basic concepts of the language. 
  Learn the basics and write your first JS programs.`,
  hours: 10,
  students: 985,
  lessons: 10,
};

export const javascriptPage = (): void => {
  const main = document.querySelector("main") as HTMLElement;
  main.innerHTML = "";
  main.innerHTML += CourseTemplate(JSGif, JSLogo, courseInfo, jsTasks);
  BtnContId();
  ChangeLesson();
};
function BtnContId() {
  const a = document.querySelector("ul") as HTMLElement;
  a.id = "js";
}
function ChangeLesson() {
  const sjs = Array.from(document.querySelectorAll("li"));

  for (const el of sjs) {
    el.addEventListener("click", () => {
      Lessons(+el.id, "js");
    });
  }
}