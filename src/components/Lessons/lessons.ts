import Home from "../../assets/img/Lessons/home.png";

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
                JavaScript: Hello, World!
As is tradition, we'll start by writing a 'Hello, World!' program. The program will print the following text:
Hello world!

To print something, you need to give computer a special command. In JavaScript, we use console.log().
Instructions
Copy the exact code from the instructions into the editor and run it by clicking “Run”.
console.log('Hello, World!');
Note that if you type hello, woRld! instead of Hello, World!, it will count as different text, because upper and lowercase letters are different symbols in JavaScript. Letter size is called case, and any programmer will tell you that case is important. This rule affects almost everything in coding, so make sure you get used to paying close attention to the case at all times.
Instructions
Copy the exact code from the instructions into the editor and run it by clicking “Run”.
console.log('Hello, World!');
Note that if you type hello, woRld! instead of Hello, World!, it will count as different text, because upper and lowercase letters are different symbols in JavaScript. Letter size is called case, and any programmer will tell you that case is important. This rule affects almost everything in coding, so make sure you get used to paying close attention to the case at all times.
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