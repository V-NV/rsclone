import home from "../../assets/img/CourseTemplate/home.png";
import watch from "../../assets/img/CourseTemplate/watch.png";
import student from "../../assets/img/CourseTemplate/student1.png";
import students from "../../assets/img/CourseTemplate/students.png";
import arrow from "../../assets/icons/arrow.svg";
// import { LessonsOn } from "../View/lessonsOn"

const CourseTemplate = (
  gif: string,
  logo: string,
  courseInfo: {
    pathTitle: string;
    introTitle: string;
    introText: string;
    hours: number;
    students: number;
    lessons: number;
    tasksTitle: string;
    tasksDescription: string;
  },
  Tasks: { taskNum: number; title: string; task: string }[]
) => {
  return `
    <section class="main-wrap">
    <div class="main-cont">
      <div class="home">
        <div><img class="home-png" src="${home}" alt="home">
        <button class="pathTitle" style="background-image: url('${arrow}')">${
    courseInfo.pathTitle
  }</button>
        </div>
      </div>
      <div class="gif-cont" style="background-image: url('${gif}')"></div> 

        <div class="course">
            <div class="course-left">
                <div class="header">
                    Free course
                </div>
                <div class="parag">
                    ${courseInfo.introTitle}
                </div>
                <div class="text">
                    ${courseInfo.introText}
                </div>
                <div class="icon-box">
                    <p class="icon-string">
                    <img class="img" src="${watch}" alt="watch"> ${
    courseInfo.hours
  } hours
                    <img class="img" src="${student}" alt="students">  ${
    courseInfo.students
  } students
                    <img class="img" src="${students}"> ${
    courseInfo.lessons
  } lessons with practice in the browser
                    </p>
                </div>
                <div class="button-box">
                    <button class="btn start">Start Learning!</button>
                    <button class="btn signup">Sign Up</button>
                </div>
            </div>
            <div class="course-logo-box" style="background-image: url('${logo}')">
            </div>
        </div>
        <div class="tasks-title">
            <p>${courseInfo.tasksTitle}</p>
        </div>
        <div class="basics-cont">
            <ul class="tasks-container">
                ${Tasks.map((item) => {
                  return `<li id=${item.taskNum}>
                  <button class="task-item">${item.taskNum}. ${item.title}</button>
                  </li>`;
                })}
            </ul>
            <div class="tasks-sub">
            ${courseInfo.tasksDescription}
            </div>
        </div>
        </div> 
        </section>;
    `;
};

export default CourseTemplate;
