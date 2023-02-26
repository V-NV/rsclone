import CodeMirror from "codemirror";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/dracula.css";
import "codemirror/theme/darcula.css";
import "codemirror/mode/xml/xml.js";
import "codemirror/mode/css/css.js";
import "codemirror/mode/javascript/javascript.js";
import "codemirror/mode/htmlmixed/htmlmixed.js";

/*
import "codemirror/addon/lint/lint";
import "codemirror/addon/lint/javascript-lint";*/
export function FullIde(): void {
    const main = document.querySelector("main") as HTMLElement;
    //main.className = "present-main-wrap";
    main.innerHTML = "";
    main.innerHTML += ` 
    <section class="full-ide-wrap">
    <div class="home">
    <a href="#"><button><svg class="btnh" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="enable-background:new 0 0 122.88 112.07" viewBox="0 0 122.88 112.07"><path d="M61.44 0 0 60.18l14.99 7.87L61.04 19.7l46.85 48.36 14.99-7.87L61.44 0zM18.26 69.63 61.5 26.38l43.11 43.25v42.43H73.12V82.09H49.49v29.97H18.26V69.63z"/></svg></button></a>

     <button class="pathTitle">
       <svg xmlns="http://www.w3.org/2000/svg" width="960" height="480" version="1.0" viewBox="0 0 720 360"><path d="M469 78.7c0 .4 2.2 6 4.9 12.3 10 23.8 16.4 47.4 17.8 65.7l.6 7.3H0v35H492.3l-.7 7.8c-1.6 19.7-8.1 42.8-19 68.1-2 4.6-3.4 8.6-3.1 8.9.5.5 17.5-6.5 65-27 12.7-5.5 24.6-10.6 26.5-11.4 4-1.7 5.3-2.3 13-5.7 3-1.4 10-4.4 15.5-6.7s12.3-5.3 15.2-6.6c2.8-1.3 5.4-2.4 5.7-2.4.2 0 3.5-1.4 7.3-3.1 10.4-4.7 11.8-5.3 27-11.8 7.9-3.3 16.2-6.9 18.5-8 2.4-1.1 11.7-5.2 20.8-9.1 9.1-4 18.2-8 20.3-8.9 4.6-2.1 7.5-.4-23.1-13.7-7-3.1-22.4-9.7-34.2-14.8-11.8-5.1-23.6-10.3-26.2-11.5-2.6-1.1-4.9-2.1-5.2-2.1-.2 0-3.5-1.4-7.3-3.1-3.7-1.7-8.6-3.9-10.8-4.9-2.2-1-17.9-7.7-35-15-29.2-12.4-37.3-15.9-42-18-1.1-.5-4.2-1.8-7-3-2.7-1.2-5.9-2.5-7-3-1.1-.5-8.5-3.6-16.5-7-12.7-5.3-17.2-7.3-20.2-8.8-.5-.2-.8 0-.8.5z"/></svg>
      <a href="#"><span>uuuu</span></a></button>
           
</div>
    <div class="full-ide-cont">

        

        <div class="full-left">
          
          <div class="editor-header">HTML</div>
            <div class="editor-html">
              <div class="code-html">
                  <div class="html-code"></div>
              </div>
          </div>
          
          <div class="editor-header">CSS</div>
          <div class="editor-css">
            <div class="code-css">
                <div class="css-code"></div>
          </div>
          </div>

          <div class="editor-header">JavaScript</div>
          <div class="editor-js">
            <div class="code-js">
                 <div class="js-code"></div>
            </div>
          </div>

        </div> 
        <div class="full-right">
            <div class="full-btn-cont">
                 <div class="full-run">RUN</div>
                 <div class="full-reset">RESET</div>
            </div>
            <iframe class="full-work" id="preview-window"></iframe>
            <div class="full-console">
                <div class="console-header">Console</div>
                <div class="console-work"></div>
            </div>

        </div>
      </div>
    </section>`;


    const htmlEdit = CodeMirror((document.querySelector(".html-code") as HTMLDivElement),{
        lineNumbers: true,
        tabSize:4,
        mode:"xml",
        theme:"darcula"
        });
        const cssEditor = CodeMirror((document.querySelector(".css-code") as HTMLDivElement),{
        lineNumbers: true,
        tabSize:4,
        mode:"css",
        theme:"darcula"
        });
        const jsEditor = CodeMirror((document.querySelector(".js-code") as HTMLDivElement),{
        lineNumbers: true,
        tabSize:4,
        mode:"javascript",
        theme:"darcula"
        });
        (document.querySelector('.full-run') as HTMLButtonElement).addEventListener('click',()=>{
            const htmlCode = htmlEdit.getValue('');
            const cssCode = "<style>"  + cssEditor.getValue() + "</style>";
            const jsCode = "<script>" + jsEditor.getValue() + "</script>";
          
            const previewWindow = document.querySelector('#preview-window')
            
            const iWindow = (<HTMLIFrameElement> previewWindow).contentWindow?.document;

           // previewWindow.contentWindow.document;
           if(iWindow) {
            iWindow.location.href='/'
            iWindow.open();
            iWindow.write(htmlCode + cssCode + jsCode);
            iWindow.close();

       }  
   })
}
/*const x = document.querySelector("iframe").contentWindow;
//x = window.frames[0];

x.document.querySelector("body").style.backgroundColor = "blue";
// this would turn the 1st iframe in document blue.*/