import CourseTemplate from "../pages/CourseTemplate";
import htmlGif from "../../assets/img/html/html-intro.gif";
import htmlLogo from "../../assets/img/html/html-logo.png";
import htmlTasks from "../tasksData/htmlTasks/htmlTasks";
import { Lessons } from "../Lessons/lessons";

const courseInfo = {
  pathTitle: `HTML`,
  introTitle: `HTML: Perfect for Beginners`,
  introText: `To standardize the output of text within browser was created an HTML standard. It defines the rules for formatting text data for correct output. This course is devoted to the fundamentals of HTML markup, working with typography, media documents, and forms layout`,
  hours: 11,
  students: 20951,
  lessons: 10,
  tasksTitle: `HTML Basics`,
  tasksDescription: `In first module, we will review the fundamental concepts of HTML: tag, attribute, and nesting of tags, and will learn the core features of marking up text with paragraphs.`,
};

export const htmlPage = (): void => {
  const main = document.querySelector("main") as HTMLElement;
  main.innerHTML = "";
  main.innerHTML += CourseTemplate(htmlGif, htmlLogo, courseInfo, htmlTasks);
  BtnContId();
  ChangeLesson();
};
function BtnContId() {
  const a = document.querySelector("ul") as HTMLElement;
  a.id = "html";
}
function ChangeLesson() {
  const Less = Array.from(document.querySelectorAll("li"));

  for (const el of Less) {
    el.addEventListener("click", () => {
      Lessons(+el.id, "html");
    });
  }
}
