// import watch from "../../assets/img/CourseTemplate/watch.png";
// import student from "../../assets/img/CourseTemplate/student1.png";
// import students from "../../assets/img/CourseTemplate/students.png";
//import { Main } from "../Main/Main";

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
      <a href="#"><button><svg class="btnh" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="enable-background:new 0 0 122.88 112.07" viewBox="0 0 122.88 112.07"><path d="M61.44 0 0 60.18l14.99 7.87L61.04 19.7l46.85 48.36 14.99-7.87L61.44 0zM18.26 69.63 61.5 26.38l43.11 43.25v42.43H73.12V82.09H49.49v29.97H18.26V69.63z"/></svg></button></a>
        
        <button class="pathTitle">
        <svg xmlns="http://www.w3.org/2000/svg" width="960" height="480" version="1.0" viewBox="0 0 720 360"><path d="M469 78.7c0 .4 2.2 6 4.9 12.3 10 23.8 16.4 47.4 17.8 65.7l.6 7.3H0v35H492.3l-.7 7.8c-1.6 19.7-8.1 42.8-19 68.1-2 4.6-3.4 8.6-3.1 8.9.5.5 17.5-6.5 65-27 12.7-5.5 24.6-10.6 26.5-11.4 4-1.7 5.3-2.3 13-5.7 3-1.4 10-4.4 15.5-6.7s12.3-5.3 15.2-6.6c2.8-1.3 5.4-2.4 5.7-2.4.2 0 3.5-1.4 7.3-3.1 10.4-4.7 11.8-5.3 27-11.8 7.9-3.3 16.2-6.9 18.5-8 2.4-1.1 11.7-5.2 20.8-9.1 9.1-4 18.2-8 20.3-8.9 4.6-2.1 7.5-.4-23.1-13.7-7-3.1-22.4-9.7-34.2-14.8-11.8-5.1-23.6-10.3-26.2-11.5-2.6-1.1-4.9-2.1-5.2-2.1-.2 0-3.5-1.4-7.3-3.1-3.7-1.7-8.6-3.9-10.8-4.9-2.2-1-17.9-7.7-35-15-29.2-12.4-37.3-15.9-42-18-1.1-.5-4.2-1.8-7-3-2.7-1.2-5.9-2.5-7-3-1.1-.5-8.5-3.6-16.5-7-12.7-5.3-17.2-7.3-20.2-8.8-.5-.2-.8 0-.8.5z"/></svg>
        <a href="#${courseInfo.tasksTitle.split(' ')[0].toLocaleLowerCase()}"><span>${courseInfo.tasksTitle.split(' ')[0]}</span></a></button>

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
                <div class="stats-box">
                  <div class="stats-item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"><g clip-path="url(#a)"><path fill="#000" fill-rule="evenodd" d="M14.5 0C22.508 0 29 6.492 29 14.5S22.508 29 14.5 29 0 22.508 0 14.5 6.492 0 14.5 0Zm-2.01 7.203h1.772c.323 0 .59.266.59.59v6.83h6.232c.326 0 .59.266.59.59v1.772c0 .326-.266.59-.59.59h-9.187V7.793c0-.326.267-.59.592-.59Zm2.01-3.91c6.19 0 11.208 5.017 11.208 11.207S20.69 25.708 14.5 25.708 3.292 20.69 3.292 14.5C3.292 8.312 8.31 3.292 14.5 3.292Z" clip-rule="evenodd"/></g><defs><clipPath id="a"><rect width="30" height="30"/></clipPath></defs></svg>
                ${courseInfo.hours} hours
                </div>

                <div class="stats-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="393.333" version="1.0" viewBox="0 0 295 163"><path d="M37 1.9c-7.8 2.4-15.5 9.7-18.5 17.4-2.3 6-1.7 16.5 1.3 22.2 8.9 17.3 31.1 20.8 44.8 7.1 8-8 10.2-17.2 6.8-28.6-2.1-7-9.8-14.9-16.8-17.3C49.5.9 41.4.6 37 1.9zM240.7 2.4C229.9 6.3 222 17.5 222 28.9c0 7.6 2.7 14 8.4 19.7 11.2 11.1 27.8 11.4 38.9.6 5.6-5.4 7.9-10.5 8.5-18.7.6-9.3-2.1-15.8-8.9-21.9C261 1.5 250-.9 240.7 2.4zM139.5 14.3c-12.1 4.1-21.9 13.3-25.5 24.3-3.3 9.9-2.6 20.6 2 29.2 3.8 7.1 10.7 13.9 17.8 17.4 4.1 2 6.2 2.3 15.7 2.3 10.2 0 11.4-.2 16.8-3 6.8-3.4 14.3-11.1 17.8-18.2 2-4.1 2.3-6.3 2.4-15.3 0-9.5-.3-11-2.7-16.1-6.3-12.6-18.9-21-32.7-21.6-4.5-.2-9.2.3-11.6 1zM31.3 65.9c-14.7 5.4-26.4 19.5-29.9 36-.7 3.6-1.4 7.4-1.4 8.3 0 1.7 2.8 1.8 44.8 1.8h44.8l-.7-6.3c-2-16.6-11.6-30.4-26.4-38-5.3-2.7-7.1-3.1-16-3.4-8-.3-11 .1-15.2 1.6zM237 65.7c-5.9 2-14.1 7.5-18.1 12.1-7.7 8.8-12.9 20.8-12.9 29.8v4.4h89.2l-.6-4.8c-2.9-20.2-15.7-36.7-32.5-41.6-6.9-2-19.2-2-25.1.1zM136.1 98.6c-24 6.4-42.7 29.4-45.9 56.1l-.8 7.3h120.2l-.8-6.7c-2.7-23.1-15.9-42.8-34.9-52.2-12.2-6-26-7.7-37.8-4.5z"/></svg>
                ${courseInfo.students} students
                </div>

                <div class="stats-item">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 26 29">
                  <g clip-path="url(#a)">
                    <path fill-rule="evenodd" d="m19.8 6.2-.2 1.3v.8c.3 0 .5.1.6.3.1.3.2.6.1 1a4.5 4.5 0 0 1-.3 1.2c-.2.7-.7 1.3-1.1 1.3l-.2.5c-.3.9-.4 1.6-1 2.2a6 6 0 0 1-2 1.7c-1 .4-1.9.6-2.7.6-.7 0-1.6-.2-2.5-.7a6.3 6.3 0 0 1-2-1.5 7 7 0 0 1-1.2-2.5L7 12c-.4 0-.8-.4-1-.9a4 4 0 0 1-.4-1.3c0-.5 0-1 .2-1.2 0-.2.3-.3.5-.4v-.7L6.2 6C5-1.6 21-2.4 19.8 6.2Zm-.9 15.2V20c-1-.1-2.2 0-3.2.3-.9.3-1.7.8-2.2 1.5v6.4A12.2 12.2 0 0 1 16 27c1-.3 2-.4 3-.4v-5.3Zm-6.4 6.7v-6.3a4.1 4.1 0 0 0-2.2-1.6c-1-.3-2.1-.4-3.1-.2v6.8a10.7 10.7 0 0 1 3 .3 8 8 0 0 1 2.3 1Zm7.5 0a15.5 15.5 0 0 0-3-.3c-1.2 0-2.4.7-3.7 1.1a.5.5 0 0 1-.3.1.6.6 0 0 1-.3 0c-1.2-.5-2.5-1.2-3.8-1.2L6 28l.2-2.8H0c.5-2 .4-3.2 1.3-5 .4-.8 1-1.2 1.9-1.8 1.5-1 3.6-1.7 5.6-2.5-.3 1.6.3 2.7 1.3 3.3a9 9 0 0 1 1.7.7c1 .1 2 0 2.8-.1a6.7 6.7 0 0 1 1.1-.4c1.4-.7 2.3-2 1.5-3.5 2 .8 4 1.5 5.6 2.5 1 .6 1.5 1 1.9 1.8 1 1.8.8 3 1.3 5h-6V28Zm-8.7-13.6a.2.2 0 0 1 0-.4.2.2 0 0 1 .3 0c.5.4 1 .6 1.4.6.5 0 .9-.2 1.3-.6a.2.2 0 0 1 .3.4c-.5.5-1 .7-1.6.7-.5 0-1.1-.2-1.7-.7Zm1-1.6a.2.2 0 0 1 0-.3.2.2 0 0 1 .3 0l.4.1.3-.1a.2.2 0 0 1 .4 0 .2.2 0 0 1 0 .3 1 1 0 0 1-.7.3 1 1 0 0 1-.7-.3Zm-1.5-2a.4.4 0 1 1-.9-.2 2.4 2.4 0 0 0-.7.2s-.2 0-.2-.2v-.3l1.1-.2c.4 0 .7 0 1 .2l.2.3-.3.2a4.7 4.7 0 0 0-.2 0Zm4.4-.1a.4.4 0 1 0 .8-.1l.7.1.3-.1-.1-.3a3.2 3.2 0 0 0-2 0c-.2 0-.2.1-.2.3 0 .1.1.2.3.1h.2Zm2.1-1.6c.1.1.1.3 0 .4a.2.2 0 0 1-.3 0c-.3-.3-1-.1-1.6 0h-.9a.2.2 0 0 1 0-.4l.8-.1c.7-.1 1.5-.3 2 .1ZM9 9.7a.2.2 0 0 1-.4 0 .2.2 0 0 1 0-.4c.6-.4 1.4-.3 2.1-.2l.8.1a.2.2 0 0 1 0 .5h-.9c-.6-.2-1.3-.3-1.6 0Zm-2.1.2a.1.1 0 0 1 .2.2.5.5 0 0 0 0 .2.4.4 0 0 0 0 .2.1.1 0 0 1 0 .2.1.1 0 0 1-.2 0 .6.6 0 0 1-.1-.4.8.8 0 0 1 0-.4Zm11.9.1a.1.1 0 0 1 0-.1.1.1 0 0 1 .2 0 .8.8 0 0 1 .1.4.7.7 0 0 1 0 .4.1.1 0 0 1-.3 0 .1.1 0 0 1 0-.2.4.4 0 0 0 0-.2.5.5 0 0 0 0-.2Zm.4-1.4-.7.5-.3-2A10.1 10.1 0 0 1 7.8 7l-.4 2-.6-.4a.2.2 0 0 1-.3 0l-.2.1c-.1.2-.2.5-.1 1 0 .3.1.7.3 1 .2.5.5.8.7.7a.2.2 0 0 1 .3.1l.2.6a6 6 0 0 0 1.2 2.4 5.8 5.8 0 0 0 1.9 1.4c.7.4 1.5.6 2.2.6.8 0 1.6-.2 2.4-.6a5.5 5.5 0 0 0 2-1.5 6 6 0 0 0 .8-2l.2-.7a.2.2 0 0 1 .3-.2c.3 0 .7-.4.9-1a4 4 0 0 0 .2-1V9c-.1-.1-.2-.2-.3-.1a.2.2 0 0 1-.3-.2Z" clip-rule="evenodd"/>
                  </g>
                  <defs>
                    <clipPath id="a">
                      <rect width="26" height="29" fill="#fff" rx="13"/>
                    </clipPath>
                  </defs>
                  </svg>
                    ${courseInfo.lessons} lessons with practice in the browser
                    </div>
                  </div>
                <div class="button-box">
                <a href="#${courseInfo.tasksTitle.split(' ')[0].toLocaleLowerCase() + '/1'}"><button class="btn start">Start Learning!</button></a>
                    <a href="#signup"><button class="btn signup">Sign Up</button></a>
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
                  return `<a href="#${courseInfo.tasksTitle.split(' ')[0].toLocaleLowerCase() + '/' + item.taskNum}"><li id=${item.taskNum}>
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
