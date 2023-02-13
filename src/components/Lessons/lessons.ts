import Home from "../../assets/img/Lessons/home.png";
import jsTasks from "../tasksData/jsTasks/jsTasks";

export function Lessons():void {
    const main = document.querySelector('main') as HTMLElement;
    
    main.innerHTML = "";
    main.innerHTML +=`<section class="courses-main-wrap">
    <div class="courses-main-cont">
        <div class="courses-home">
          <div class="courses-images">
            <img src="${Home}" alt="home">&nbsp&nbsp&nbsp&#10230&nbsp&nbsp&nbsp
               <span class="courses-name">JavaScript</span class="courses-level-name">&nbsp&nbsp&nbsp&#10230&nbsp&nbsp&nbsp
               Hellow, world!
          </div>
          <div class="courses-images">           
            <span class="courses-level-number">1</span> / <span class="courses-level-total">10</span>
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
                  <div class="courses-btn-editor-up editor-btn">Editor</div>
                  <div class="courses-btn-editor-up output-btn">Output</div>
              </div>
              <div class="courses-editor-code-container">

                  <div class="courses-editor-code-cont">
                          This will be code editor
                  </div>
                  <div class="courses-editor-code-result">
                    This will be code result 

                  </div>
                  <div class="courses-editor-message">
                    This will be message about true or false code entering
                  </div>
                  <div class="courses-editor-btn-box-bottom">
                       <div class="editor-btn-bottom btn-reset">RESET</div>
                       <div class="editor-btn-bottom btn-run">RUN</div>
                       <div class="editor-btn-bottom btn-next">NEXT</div> 
                  </div>

           </div>

           </div>
       
      
    </div>
  </section>`;
}