import CodeMirror from "codemirror";
import { JSHINT } from "jshint";
// import { JSHINT } from "jshint/index";
import { ExampleText } from "./dataExamples";

import "codemirror/lib/codemirror.css";
import "codemirror/theme/dracula.css";
import "codemirror/theme/darcula.css";
import "codemirror/theme/midnight.css";
import "codemirror/theme/monokai.css";
import "codemirror/mode/xml/xml.js";
import "codemirror/mode/css/css.js";
import "codemirror/mode/javascript/javascript.js";
import "codemirror/mode/htmlmixed/htmlmixed.js";

import "codemirror/addon/hint/javascript-hint";
import "codemirror/addon/lint/javascript-lint";

import "codemirror/addon/hint/css-hint";
import "codemirror/addon/lint/css-lint";

//import "codemirror/addon/hint/xml-hint";
//import "codemirror/addon/lint

import "codemirror/addon/hint/show-hint";
import "codemirror/addon/hint/show-hint.css";

export function FullIde(): void {
  const main = document.querySelector("main") as HTMLElement;
  //main.className = "present-main-wrap";
  main.innerHTML = "";
  main.innerHTML += ` 
    <section class="full-ide-wrap">
      
     <div class="full-home-cont">

    
    <div class="home-sandbox">
    <a href="#"><button><svg class="btnh" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="enable-background:new 0 0 122.88 112.07" viewBox="0 0 122.88 112.07"><path d="M61.44 0 0 60.18l14.99 7.87L61.04 19.7l46.85 48.36 14.99-7.87L61.44 0zM18.26 69.63 61.5 26.38l43.11 43.25v42.43H73.12V82.09H49.49v29.97H18.26V69.63z"/></svg></button></a>

     <button class="pathTitle">
       <svg xmlns="http://www.w3.org/2000/svg" width="960" height="480" version="1.0" viewBox="0 0 720 360"><path d="M469 78.7c0 .4 2.2 6 4.9 12.3 10 23.8 16.4 47.4 17.8 65.7l.6 7.3H0v35H492.3l-.7 7.8c-1.6 19.7-8.1 42.8-19 68.1-2 4.6-3.4 8.6-3.1 8.9.5.5 17.5-6.5 65-27 12.7-5.5 24.6-10.6 26.5-11.4 4-1.7 5.3-2.3 13-5.7 3-1.4 10-4.4 15.5-6.7s12.3-5.3 15.2-6.6c2.8-1.3 5.4-2.4 5.7-2.4.2 0 3.5-1.4 7.3-3.1 10.4-4.7 11.8-5.3 27-11.8 7.9-3.3 16.2-6.9 18.5-8 2.4-1.1 11.7-5.2 20.8-9.1 9.1-4 18.2-8 20.3-8.9 4.6-2.1 7.5-.4-23.1-13.7-7-3.1-22.4-9.7-34.2-14.8-11.8-5.1-23.6-10.3-26.2-11.5-2.6-1.1-4.9-2.1-5.2-2.1-.2 0-3.5-1.4-7.3-3.1-3.7-1.7-8.6-3.9-10.8-4.9-2.2-1-17.9-7.7-35-15-29.2-12.4-37.3-15.9-42-18-1.1-.5-4.2-1.8-7-3-2.7-1.2-5.9-2.5-7-3-1.1-.5-8.5-3.6-16.5-7-12.7-5.3-17.2-7.3-20.2-8.8-.5-.2-.8 0-.8.5z"/></svg>
      <span>SANDBOX</span></button>
           
</div> 
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
                 <div class="rrr">Instruction</div>
                 <div class="full-reset">RESET</div>
<div class="ide-pre off">
 
<h3 class="ide-h3">
Hello, this is a SANDBOX fully functional IDE
Here you can practice your skills, as well 
as write any code in <span style="color:#d0cf5f;">HTML CSS</span> and <span style="color:#d0cf5f;">JavaScript</span>
<span style="color:#10b4ae;">
<br>
For example:</span> Click Example button, code adding to editor and click the RUN button.
</h3>
<br>
<br>
<div class="exampl-btn-cont">
<button class="btn-example ex1" id="1">Example1</button>
<button class="btn-example ex2" id="2">Example2</button>
<button class="btn-example ex3" id="3">Example3</button>
</div>
<br>
<br>

                                           



<h3 class="ide-h3">
<span style="color:#10b4ae;">Notice:</span> For your convenience, there is an   
auto-suggestion for entering the code, 
just start typing and press <span style="color:#b36bdb;">"CTRL"</span> and 
the sandbox will add the code itself or 
offer options to choose from.
</h3>
</div>                  
            </div>
            <iframe class="full-work" id="preview-window"></iframe>
            <div class="full-console">
                <div class="console-header">Console</div>
                <iframe class="console-work" id="console-window"></iframe>
            </div>

        </div>
      </div>
    </section>`;

  /**************Examples******************* */
  /*interface Ex {
  html: String,
  css:String,
  js:String,
}*/

  

  /*************************widget************************ */
  //function Widg():void {

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const widgets: any = [];
  function updateHints() {
    jsEditor.operation(function () {
      for (let i = 0; i < widgets.length; ++i)
        jsEditor.removeLineWidget(widgets[i]);
      widgets.length = 0;

      // jsEditor.setOption('lint', { options: {'esversion': '8'  }});

      JSHINT(jsEditor.getValue(), { esversion: 6 });
      for (let i = 0; i < JSHINT.errors.length; ++i) {
        const err = JSHINT.errors[i];
        if (!err) continue;
        const msg = document.createElement("div");
        const icon = msg.appendChild(document.createElement("span"));
        icon.innerHTML = "!";
        icon.className = "lint-error-icon";
        msg.appendChild(document.createTextNode(err.reason));
        msg.className = "lint-error";
        widgets.push(
          //  jsEditor.setOption('lint', { options: {'esversion': '8'  }});
          jsEditor.addLineWidget(err.line - 1, msg, {
            coverGutter: false,
            noHScroll: true,
          })
        );
      }
    });
    const info = jsEditor.getScrollInfo();
    const after = jsEditor.charCoords(
      { line: jsEditor.getCursor().line + 1, ch: 0 },
      "local"
    ).top;
    if (info.top + info.clientHeight < after)
      jsEditor.scrollTo(null, after - info.clientHeight + 3);
  }

  const sc = document.getElementById("preview-window");
  let content;
  if (sc) {
    content = sc.textContent || sc.innerText || sc.innerHTML;
  }

  /******************************************* */
  const htmlEdit = CodeMirror(
    document.querySelector(".html-code") as HTMLDivElement,
    {
      lineNumbers: true,
      extraKeys: { Ctrl: "autocomplete" },
      tabSize: 4,
      mode: "xml",
      theme: "dracula",
    }
  );
  const cssEditor = CodeMirror(
    document.querySelector(".css-code") as HTMLDivElement,
    {
      lineNumbers: true,
      extraKeys: { Ctrl: "autocomplete" },
      tabSize: 4,
      mode: "css",
      theme: "dracula",
    }
  );
  const jsEditor = CodeMirror(
    document.querySelector(".js-code") as HTMLDivElement,
    {
      lineNumbers: true,
      //      lineWrapping: true,
      gutters: ["CodeMirror-lint-markers"],
      extraKeys: { Ctrl: "autocomplete" },
      tabSize: 4,
      mode: "javascript",
      value: content,
      theme: "dracula",
    }
  );

  /* window.editor = CodeMirror(document.getElementById("code"), {
          lineNumbers: true,
          mode: "javascript",
          value: content
        });*/

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let waiting: NodeJS.Timeout;
  jsEditor.on("change", function () {
    clearTimeout(waiting);
    waiting = setTimeout(updateHints, 500);
  });

  setTimeout(updateHints, 100);
  //Widg();

  (document.querySelector(".full-run") as HTMLButtonElement).addEventListener(
    "click",
    () => {
      const Cler = document.querySelector(".ide-pre") as HTMLDivElement;
      if (!Cler.classList.contains("off")) {
        Cler.classList.add("off");
      }

      const Framy = document.querySelector("#preview-window");
      Framy?.remove();
      const FramyNew = document.querySelector(
        ".full-console"
      ) as HTMLDivElement;
      FramyNew.insertAdjacentHTML(
        "beforebegin",
        '<iframe class="full-work" id="preview-window"></iframe>'
      );

      const htmlCode = htmlEdit.getValue() + "<p></p>";
      const cssCode = "<style>" + cssEditor.getValue() + "</style>";
      const jsCode = "<script>" + jsEditor.getValue() + "</script>";

      const previewWindow = document.querySelector("#preview-window");
      const ConsClear = document.querySelector(
        ".console-work"
      ) as HTMLDivElement;
      ConsClear.innerHTML = "";

      const iWindow = (<HTMLIFrameElement>previewWindow).contentWindow
        ?.document;
      let SWindow = (<HTMLIFrameElement>previewWindow).contentWindow;
      // previewWindow.contentWindow.document;
      if (iWindow) {
        try {
          iWindow.location.href = "/";

          iWindow.open();

          iWindow.write(htmlCode + cssCode + jsCode);

          SWindow = window.frames[0];

          const BWindow = SWindow.document.querySelector(
            "body"
          ) as HTMLBodyElement;
          BWindow.style.color = "fffbd3";
          BWindow.style.fontSize = "22px";
          BWindow.style.overflowY = "hidden";
          /*let x = (document.querySelector("#preview-window") as HTMLIFrameElement).contentWindow;
            x = window.frames[0];
            const XXX = x.document.querySelector("body") as HTMLBodyElement;
            XXX.style.color = "blue";*/
          iWindow.close();
        } catch (e) {
          const ConsoleMsg = document.querySelector(
            ".console-work"
          ) as HTMLElement;
          ConsoleMsg.innerHTML = `<p style="display:none;">ErrMsg</p>`;
        }

        ConsOut(jsEditor);
        Reset(jsEditor, htmlEdit, cssEditor);
      }
    }
  );
  function instruction() {
    const Congr = document.querySelector(".ide-pre") as HTMLDivElement;
    const ExjBtn = document.querySelector(".rrr") as HTMLButtonElement;
    //const bbb = document.querySelector('.full-right pre') as HTMLElement;

    ExjBtn.addEventListener("click", () => {
      //console.log('Congr.children[3]');

      if (Congr.classList.contains("off")) {
        Congr.classList.remove("off");
        addExamples();
        //Congr.textContent += ""
      } else {
        Congr.classList.add("off");
      }
      const Framy = document.querySelector("#preview-window");
      Framy?.remove();
      const FramyNew = document.querySelector(
        ".full-console"
      ) as HTMLDivElement;
      FramyNew.insertAdjacentHTML(
        "beforebegin",
        '<iframe class="full-work" id="preview-window"></iframe>'
      );


    });
  }
  instruction(); //кнопка инструкций on/aff
  /***********************example adding*********************/
  function addExamples() {
    const btn = Array.from(document.querySelectorAll(".btn-example"));

    for (const b of btn) {
      b.addEventListener("click", () => {
        // if(+b.id == 1) {
        htmlEdit.setValue(ExampleText[+b.id].html);
        cssEditor.setValue(ExampleText[+b.id].css);
        jsEditor.setValue(ExampleText[+b.id].js);
        //}
      });
    }
  }
  /***********************example adding*********************/
}
//const Log = console.log.bind(console);

function ConsOut(jsEditor: CodeMirror.Editor): void {
  const Framy = document.querySelector("#console-window");
  Framy?.remove();
  const FramyNew = document.querySelector(".full-console") as HTMLDivElement;
  FramyNew.insertAdjacentHTML(
    "beforeend",
    '<iframe class="console-work" id="console-window"></iframe>'
  );

  //const jsCode = "<script>" + jsEditor.getValue() + "</script>";

  const previewWindow = document.querySelector("#console-window");

  const iWindow = (<HTMLIFrameElement>previewWindow).contentWindow?.document;
  let SWindow = (<HTMLIFrameElement>previewWindow).contentWindow;
  // previewWindow.contentWindow.document;
  if (iWindow) {
    try {
      iWindow.location.href = "/";

      iWindow.open();
      const Log = console.log.bind(console);
      const Length = jsEditor.lineCount();
      const arrLine: string[] = [];
      let argStr = "";
      for (let i = 0; i < Length; i += 1) {
        if (
          !(
            jsEditor.getLine(i).match(/add/g) ||
            jsEditor.getLine(i).match(/ass/g) ||
            jsEditor.getLine(i).match(/uery/g) ||
            jsEditor.getLine(i).match(/else/g) ||
            jsEditor.getLine(i).match(/ocum/g) ||
            jsEditor.getLine(i).match(/wri/g) ||
            jsEditor.getLine(i) == "})"
          )
        ) {
          arrLine.push(jsEditor.getLine(i));
        }
      }
      argStr = arrLine.join(" ;; ");
      console.log(argStr);
      console.log = function () {
        // eslint-disable-next-line prefer-rest-params
        const test = [...arguments];
        //ConsoleMsg.innerHTML += "";
        test.forEach((element) => {
          iWindow.write(
            `<p style="color:#FFFBD3;line-height:0px;">${"> " + element}</p>`
          );
          //ConsoleMsg.innerHTML += `<p>${"> " + element}</p>`;
        });
        // eslint-disable-next-line prefer-rest-params
        return Log(...arguments);
      };
      try {
        const test = new Function(argStr);
        test();
      } catch (e) {
        console.dir("errrrrr");
      }

      SWindow = window.frames[0];

      const BWindow = SWindow.document.querySelector("body") as HTMLBodyElement;
      BWindow.style.color = "fffbd3";
      BWindow.style.fontSize = "22px";

      iWindow.close();
    } catch (e) {
      const ConsoleMsg = document.querySelector(".console-work") as HTMLElement;
      ConsoleMsg.innerHTML = `<p style="display:none;">ErrMsg</p>`;
    }
  }
  /***************************************************************** */

  //const ConsoleMsg = document.querySelector('.console-work') as HTMLElement;
  // ConsoleMsg.innerHTML = "";
  //const consCode = jsEditor.getValue();
  /*----------------------------------------------------------- */
  /*const Length = jsEditor.lineCount();
  const arrLine:string[] = [];
  let argStr = "";
  for(let i = 0; i <Length; i += 1) {
    if(!jsEditor.getLine(i).includes('add')) {
       arrLine.push(jsEditor.getLine(i))
    }
  }
  //argStr = arrLine.join(";");
  */
  //console.log(argStr)
  //const Log = console.log.bind(console);
  /*           console.log = function () {
              // eslint-disable-next-line prefer-rest-params
              const test = [...arguments];
              //ConsoleMsg.innerHTML += "";
              test.forEach((element) => {
              
                ConsoleMsg.innerHTML += `<p>${"> " + element}</p>`;
              });
             // eslint-disable-next-line prefer-rest-params
              return Log(...arguments);
            };
           try{
            const test = new Function(argStr);
            test();
           }
           catch(e){
             ConsoleMsg.innerHTML = `<p style="color:red;font-size:20px;">err</p>`
           }*/
}

function Reset(
  JsEditor: CodeMirror.Editor,
  htmlEdit: CodeMirror.Editor,
  cssEditor: CodeMirror.Editor
): void {
  const BtnReset = document.querySelector(".full-reset") as HTMLButtonElement;
  const ConsoleW = document.querySelector(".console-work") as HTMLElement;
  const previewWindow = document.querySelector("#preview-window");
  let SWindow = (<HTMLIFrameElement>previewWindow).contentWindow;
  const iWindow = (<HTMLIFrameElement>previewWindow).contentWindow?.document;
  SWindow = window.frames[0];
  const BWindow = SWindow.document.querySelector("body") as HTMLBodyElement;

  BtnReset.addEventListener("click", () => {
    JsEditor.setValue("");
    htmlEdit.setValue("");
    cssEditor.setValue("");
    if (iWindow) {
      BWindow.innerHTML = "";
    }
    ConsoleW.textContent = "";
  });
}
