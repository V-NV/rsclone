import home from "../../assets/img/CourseTemplate/home.png"
import watch from "../../assets/img/CourseTemplate/watch.png"
import student from "../../assets/img/CourseTemplate/student1.png"
import students from "../../assets/img/CourseTemplate/studentnew.png"
// import { LessonsOn } from "../View/lessonsOn"

const CourseTemplate = (
    props: { id: number, title: string, task: string }[],
    gif: string,
    logo: string
    ) => {
    return `
      <div class="home">
        <p><img src="${home}" alt="home">&nbsp&nbsp&nbsp&#10230&nbsp&nbsp&nbspJavaScript</p>
      </div>
      <div class="gif-cont" style="background-image: url('${gif}')"></div> 

        <div class="course">
            <div class="course-left">
                <div class="header">
                    Free course
                </div>
                <div class="parag">
                    JavaScript: Perfect for beginners
                </div>
                <div class="text">
                    Programming learning is an interesting and exciting process.
                    The syntax of the language is the simplest and shortest path,
                    without which it is impossible to start. This free online JavaScript 
                    course will introduce you to the basic concepts of the language. 
                    Learn the basics and write your first JS programs.
                </div>
                <div class="icon-box">
                    <p class="icon-string">
                    <img class="img" src="${watch}" alt="watch"> 6 hours &nbsp&nbsp&nbsp
                    <img class="img" src="${student}" alt="students"> 982 students &nbsp&nbsp&nbsp
                    <img class="img" src="${students}">10 lessons with practice in the browser
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
            <p>JavaScript basics</p>
        </div>
        <div class="basics-cont">
            <ul class="tasks-container">
                ${props.map((item) => {
                    return `<li id=${item.id}><p class="task-item">${item.id}. ${item.title}</p></li>`
                })
                }
            </ul>
            <div class="tasks-sub">
            JavaScript is one of the most popular programming languages in the world.
            It is used to build interactive web pages, mobile applications, and in 
            server-side development. You will learn JS from scratch, from the very beginning.
            </div>
        </div>
`
}

export default CourseTemplate;