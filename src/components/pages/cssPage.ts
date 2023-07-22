import CourseTemplate from "../pages/CourseTemplate";
import CSSGif from "../../assets/img/css/css-intro.gif";
import CSSLogo from "../../assets/img/css/css-logo.png";
import cssTasks from "../tasksData/cssTasks/cssTasks";
import { Lessons } from "../Lessons/lessons";
import { Main } from "../Main/Main";

const courseInfo = {
  pathTitle: `CSS`,
  introTitle: `CSS: Free Online Learning for Beginners`,
  introText: `Cascading Style Sheets (CSS) allow you to lay out web pages according to given rules. Text styles, block layouts, and animations are all specified via Cascading Style Sheets`,
  hours: 8,
  students: 1430,
  lessons: 10,
  tasksTitle: `CSS basics`,
  tasksDescription: `Cascading Style Sheets (CSS) allow you to lay out web pages according to given rules. Text styles, block layouts, and animations are all specified via Cascading Style Sheets.`,
};

export const cssPage = (): void => {
  const main = document.querySelector("main") as HTMLElement;
  main.innerHTML = "";
  main.innerHTML += CourseTemplate(CSSGif, CSSLogo, courseInfo, cssTasks);
  BtnContId();
  ChangeLesson();
  ToHome();
};
function BtnContId() {
  const a = document.querySelector("ul") as HTMLElement;
  a.id = "css";
}

function ChangeLesson() {
  const Less = Array.from(document.querySelectorAll("li"));

  for (const el of Less) {
    el.addEventListener("click", () => {
      Lessons(+el.id, "css");
    });
  }
}
function ToHome():void {
  const BtnHome = document.querySelector('.btnh') as HTMLElement;
  BtnHome.addEventListener('click',()=>{
    Main();
  })
}