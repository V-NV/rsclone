import Home from "../../assets/img/Lessons/home.png";
import { IdeHtml } from "./ide/idehtml";
import { IdeCss } from "./ide/idecss";
import HtmlTasks from "../tasksData/htmlTasks/htmlTasks";
import cssTasks from "../tasksData/cssTasks/cssTasks";

export let CurrienNum = 1;
let CurrientIde = "";
export function Lessons(num: number, ide: string): void {
  const main = document.querySelector("main") as HTMLElement;
  CurrientIde = ide;
  CurrienNum = num;
  main.innerHTML = "";
  main.innerHTML += `<section class="courses-main-wrap">
    <div class="courses-main-cont">
        <div class="courses-home">
          <div class="courses-images">
            <img src="${Home}" alt="home">&nbsp&nbsp&nbsp&#10230&nbsp&nbsp&nbsp
               <span class="courses-name">JavaScript</span>&nbsp&nbsp&nbsp&#10230&nbsp&nbsp&nbsp
               <span class="courses-level-name">Hellow, world!</span>
          </div>
          <div class="courses-images">           
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
                       <div class="editor-btn-bottom btn-prev" id="btn-prev">PREV</div>
                       <div class="editor-btn-bottom btn-run">RUN</div>
                       <button class="editor-btn-bottom btn-next" id="btn-next">NEXT</button> 
                  </div>

           </div>

           </div>
     </div>
  </section>`;
  SetIde(ide);
  LessonText(num);
  Ide(ide);
  CourseName(ide);
  LevelName(num);
  //checkSolution(num);
  BtnPrev(num);
  Prev_btn_OnOff(num);
  BtnNext(num);
  Next_btn_OnOff(num);
}
export let Tasks = HtmlTasks;
function SetIde(ide: string) {
  if (ide == "html") {
    Tasks = HtmlTasks;
  }
  if (ide == "css") {
    Tasks = cssTasks;
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
}
function CourseName(name: string) {
  const CourseNam = document.querySelector(".courses-name") as HTMLElement;
  CourseNam.textContent = name.toUpperCase();
}

function LevelName(num: number) {
  const LevelNam = document.querySelector(".courses-level-name") as HTMLElement;
  LevelNam.textContent = Tasks[num - 1].title.slice(5);
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

function BtnNext(num: number) {
  const Next = document.querySelector("#btn-next") as HTMLButtonElement;
  // const Message = document.querySelector(".courses-editor-message") as HTMLElement;
  Next.addEventListener("click", () => {
    if (num < 10) {
      const count: number = num + 1;
      Lessons(count, CurrientIde);
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
