import { IdeHtml } from "./ide/idehtml";
import { IdeCss } from "./ide/idecss";
import { Idejs } from "./ide/idejs";
import { Main } from "../Main/Main";
import { javascriptPage } from "../pages/javascriptPage";
import { cssPage } from "../pages/cssPage";
import { htmlPage } from "../pages/htmlPage";
import HtmlTasks from "../tasksData/htmlTasks/htmlTasks";
import cssTasks from "../tasksData/cssTasks/cssTasks";
import jsTasks from "../tasksData/jsTasks/jsTasks";

export let CurrienNum = 1;
let CurrientIde = "";
export function Lessons(num: number, ide: string): void {
  const main = document.querySelector("main") as HTMLElement;
  const poi = ide;
  CurrientIde = poi;
  CurrienNum = num;
  if(num < 2) {
  CurrienNum = 2;
  }
  main.innerHTML = "";
  main.innerHTML += `
    <section class="courses-main-wrap">
      <div class="courses-main-cont">
        <div class="courses-home">

        <div class="path">

            <button class="pathItem">
              <svg class="home-icon" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="enable-background:new 0 0 122.88 112.07" viewBox="0 0 122.88 112.07"><path d="M61.44 0 0 60.18l14.99 7.87L61.04 19.7l46.85 48.36 14.99-7.87L61.44 0zM18.26 69.63 61.5 26.38l43.11 43.25v42.43H73.12V82.09H49.49v29.97H18.26V69.63z"/></svg>
            </button>

            <button class="pathItem">
              <svg xmlns="http://www.w3.org/2000/svg" width="960" height="480" version="1.0" viewBox="0 0 720 360"><path d="M469 78.7c0 .4 2.2 6 4.9 12.3 10 23.8 16.4 47.4 17.8 65.7l.6 7.3H0v35H492.3l-.7 7.8c-1.6 19.7-8.1 42.8-19 68.1-2 4.6-3.4 8.6-3.1 8.9.5.5 17.5-6.5 65-27 12.7-5.5 24.6-10.6 26.5-11.4 4-1.7 5.3-2.3 13-5.7 3-1.4 10-4.4 15.5-6.7s12.3-5.3 15.2-6.6c2.8-1.3 5.4-2.4 5.7-2.4.2 0 3.5-1.4 7.3-3.1 10.4-4.7 11.8-5.3 27-11.8 7.9-3.3 16.2-6.9 18.5-8 2.4-1.1 11.7-5.2 20.8-9.1 9.1-4 18.2-8 20.3-8.9 4.6-2.1 7.5-.4-23.1-13.7-7-3.1-22.4-9.7-34.2-14.8-11.8-5.1-23.6-10.3-26.2-11.5-2.6-1.1-4.9-2.1-5.2-2.1-.2 0-3.5-1.4-7.3-3.1-3.7-1.7-8.6-3.9-10.8-4.9-2.2-1-17.9-7.7-35-15-29.2-12.4-37.3-15.9-42-18-1.1-.5-4.2-1.8-7-3-2.7-1.2-5.9-2.5-7-3-1.1-.5-8.5-3.6-16.5-7-12.7-5.3-17.2-7.3-20.2-8.8-.5-.2-.8 0-.8.5z"/></svg>
              <span class="courses-name">JavaScript</span>
            </button>

            <button class="pathItem">
              <svg xmlns="http://www.w3.org/2000/svg" width="960" height="480" version="1.0" viewBox="0 0 720 360"><path d="M469 78.7c0 .4 2.2 6 4.9 12.3 10 23.8 16.4 47.4 17.8 65.7l.6 7.3H0v35H492.3l-.7 7.8c-1.6 19.7-8.1 42.8-19 68.1-2 4.6-3.4 8.6-3.1 8.9.5.5 17.5-6.5 65-27 12.7-5.5 24.6-10.6 26.5-11.4 4-1.7 5.3-2.3 13-5.7 3-1.4 10-4.4 15.5-6.7s12.3-5.3 15.2-6.6c2.8-1.3 5.4-2.4 5.7-2.4.2 0 3.5-1.4 7.3-3.1 10.4-4.7 11.8-5.3 27-11.8 7.9-3.3 16.2-6.9 18.5-8 2.4-1.1 11.7-5.2 20.8-9.1 9.1-4 18.2-8 20.3-8.9 4.6-2.1 7.5-.4-23.1-13.7-7-3.1-22.4-9.7-34.2-14.8-11.8-5.1-23.6-10.3-26.2-11.5-2.6-1.1-4.9-2.1-5.2-2.1-.2 0-3.5-1.4-7.3-3.1-3.7-1.7-8.6-3.9-10.8-4.9-2.2-1-17.9-7.7-35-15-29.2-12.4-37.3-15.9-42-18-1.1-.5-4.2-1.8-7-3-2.7-1.2-5.9-2.5-7-3-1.1-.5-8.5-3.6-16.5-7-12.7-5.3-17.2-7.3-20.2-8.8-.5-.2-.8 0-.8.5z"/></svg>
              <span class="courses-level-name">Hello, world!</span>
            </button>
        </div>
          <div class="level">
            <span class="courses-level-number">${num}</span> / <span class="courses-level-total">10</span>
          </div>  
        </div>


        <div class="courses-work-container">
           <div class="courses-lesson-cont">
               <div class="courses-btn-lesson-up lesson-btn">Lesson</div>
               <div class="courses-lesson-text-box"> 
              
              </div>
         </div>
    
           <div class="courses-editor-cont">
              <div class="courses-editor-button-box">
                  <div class="courses-btn-editor-up btn-reset">RESET</div>
                  
              </div>
              <div class="courses-editor-code-container">

                  <div class="courses-editor-code-cont">
                          This will be code editor
                  </div>
                  <div class="courses-editor-code-result" id="cecr">
                    This will be code result. 

                  </div>
                  <div class="courses-editor-message">
                    This will be message.
                  </div>
                  <div class="courses-editor-btn-box-bottom">
                      <a href="#${ide}/${CurrienNum - 1}" class="a-prev"><div class="editor-btn-bottom btn-prev" id="btn-prev">PREV</div></a>
                       <div class="editor-btn-bottom btn-run">RUN</div>
                       <a href="#${ide}/${num+1}" id="a-next"><div class="editor-btn-bottom btn-next" id="btn-next">NEXT</div></a> 
                  </div>

           </div>

           </div>
     </div>
  </section>`;
  ToHome();
  ToParentPage();
  SetIde(ide);
  LessonText(num);
  Ide(ide);
  CourseName(ide);
  LevelName(num, ide);
  //checkSolution(num);
  BtnPrev(num);
  Prev_btn_OnOff(num);
  BtnNext(num,ide);
  Next_btn_OnOff(num);
  
}

export let Tasks = jsTasks;
function SetIde(ide: string) {
  if (ide == "html") {
    Tasks = HtmlTasks;
  }
  if (ide == "css") {
    Tasks = cssTasks;
  }
  if (ide == "javascript") {
    Tasks = jsTasks;
  }
}

function LessonText(num: number) {
  const TextBox = document.querySelector(
    ".courses-lesson-text-box"
  ) as HTMLElement;
  TextBox.innerHTML = "";
  TextBox.innerHTML = Tasks[num - 1].task;
}

function Ide(ide: string) {
  if (ide == "html") {
    IdeHtml();
  }
  if (ide == "css") {
    IdeCss();
  }
  if (ide == "javascript") {
    Idejs();
  }
}
function CourseName(name: string) {
  const CourseNam = document.querySelector(".courses-name") as HTMLElement;
  CourseNam.textContent = name.toUpperCase();
}

function LevelName(num: number, ide: string) {
  const LevelNam = document.querySelector(".courses-level-name") as HTMLElement;
  if (ide == "javascript") {
    LevelNam.textContent = Tasks[num - 1].title.slice(11);
  } else {
    LevelNam.textContent = Tasks[num - 1].title.slice(5);
  }
}

/*function checkSolution(num:number) {
  const solutions = document.querySelector('#code') as HTMLElement;
  // const result = document.querySelector('.courses-editor-code-result') as HTMLElement;
  const Message = document.querySelector(".courses-editor-message") as HTMLElement;
  const Run = document.querySelector('.btn-run') as HTMLElement;

  Run.addEventListener('click', () => {
   // console.log(Tasks[num-1].solution,solutions.textContent)
const g = Tasks[num-1].solution || "";
const j = solutions.textContent || "";

if(j.indexOf(g)){
Message.style.color = 'green';
Message.textContent = "Well Done";
}
else{
Message.style.color = 'red';
Message.textContent = "It`s wrong solution try again";
   }
 })
}*/


function BtnNext(num: number,ide:string) {
  const Next = document.querySelector("#btn-next") as HTMLButtonElement;
  const Ahref = document.querySelector("#a-next") as HTMLAnchorElement;
  // const Message = document.querySelector(".courses-editor-message") as HTMLElement;
  Next.addEventListener("click", () => {
    if (num < 10) {
      const count: number = num + 1;
      Lessons(count, CurrientIde);
    }
    if(num > 9){
      Ahref.href = `#${ide}/10`
    }
  });
}
function Next_btn_OnOff(num: number) {
  if (num == 10) {
    (document.getElementById("btn-next") as HTMLButtonElement).disabled = true;
    (
      document.getElementById("btn-next") as HTMLButtonElement
    ).style.backgroundColor = "grey";
    (document.getElementById("btn-next") as HTMLButtonElement).style.cursor =
      "default";
    (document.getElementById("btn-next") as HTMLButtonElement).style.opacity =
      "1";
  } else {
    (document.getElementById("btn-next") as HTMLButtonElement).disabled = false;
    (
      document.getElementById("btn-next") as HTMLButtonElement
    ).style.backgroundColor = "#914c36";
    (document.getElementById("btn-next") as HTMLButtonElement).style.cursor =
      "pointer";
  }
}

function BtnPrev(num: number) {
  const Prev = document.querySelector("#btn-prev") as HTMLButtonElement;
  Prev.addEventListener("click", () => {
    if (num > 1) {
      const count: number = num - 1;
      Lessons(count, CurrientIde);
    }
  });
}
function Prev_btn_OnOff(num: number) {
  if (num == 1) {
    (document.getElementById("btn-prev") as HTMLButtonElement).disabled = true;
    (
      document.getElementById("btn-prev") as HTMLButtonElement
    ).style.backgroundColor = "grey";
    (document.getElementById("btn-prev") as HTMLButtonElement).style.cursor =
      "default";
    (document.getElementById("btn-prev") as HTMLButtonElement).style.opacity =
      "1";
  } else {
    (document.getElementById("btn-prev") as HTMLButtonElement).disabled = false;
    (
      document.getElementById("btn-prev") as HTMLButtonElement
    ).style.backgroundColor = "#914c36";
    (document.getElementById("btn-prev") as HTMLButtonElement).style.cursor =
      "pointer";
  }
}
function ToHome():void {
  const BtnHome = document.querySelector('.home-icon') as HTMLElement;
  BtnHome.addEventListener('click',()=>{
    Main();
  })
}
function ToParentPage():void {
  const BtnParent = document.querySelector('.courses-name') as HTMLElement;
  BtnParent.addEventListener('click',()=>{
    if(BtnParent.textContent == "HTML"){htmlPage();}
    if(BtnParent.textContent == "CSS"){cssPage();}
    if(BtnParent.textContent == "JAVASCRIPT"){javascriptPage();}
  })
}