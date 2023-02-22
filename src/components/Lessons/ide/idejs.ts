import CodeMirror from "codemirror";
import "../../../../node_modules/codemirror/lib/codemirror.css";
import "../../../../node_modules/codemirror/theme/dracula.css";
//import "../../../../node_modules/codemirror/mode/smarty/smarty";
//import "../../../../node_modules/codemirror/mode/xml/xml.js";
import "../../../../node_modules//codemirror/mode/javascript/javascript.js";
//import "../../../../node_modules//codemirror/mode/css/css.js";
//import "../../../../node_modules//codemirror/mode/htmlmixed/htmlmixed.js";
import "codemirror/addon/lint/lint";
import "codemirror/addon/lint/javascript-lint";

import { Tasks } from "../lessons";
import { CurrienNum } from "../lessons";
  
  export function Idejs() {
    const main = document.querySelector(
      ".courses-editor-code-cont"
    ) as HTMLElement;
    main.innerHTML = "";
    main.innerHTML += `
                  <div class="editor">
                       <div class="code">
                           <div class="html-code"></div>
                       </div>
                  </div>
      `;
    const WindowIdeJs = document.querySelector(".html-code") as HTMLDivElement;
    const JsEditor = CodeMirror(WindowIdeJs, {
      lineNumbers: true,
      tabSize: 4,
      mode: "javascript",
      theme: "dracula",
      //lint: true,
  
      //maxHighlightLength:1,  // ограничение длинны подсветки
    });
    const previewWindow = document.querySelector(
      ".courses-editor-code-result"
    ) as HTMLElement;
    const originalLog = console.log.bind(console);
    const BtnRun = document.querySelector(".btn-run") as HTMLButtonElement;
    BtnRun.addEventListener("click", () => {
            
      const JsCode = JsEditor.getValue();
      previewWindow.innerHTML = "";
      // const previewWindow = document.querySelector(
      //   ".courses-editor-code-result"
      // ) as HTMLElement;
  
      console.log = function () {
        // eslint-disable-next-line prefer-rest-params
        const test = [...arguments];
        test.forEach((element) => {
        
          previewWindow.innerHTML += `<p>${element}</p>`;
        });
       // eslint-disable-next-line prefer-rest-params
        return originalLog(...arguments);
      };
     try{
      const test = new Function(JsCode);
      test();
     }
     catch(e){const Message = document.querySelector(
      ".courses-editor-message"
    ) as HTMLElement;
    Message.innerHTML = `<p style="color:red;">syntax error</p>`
    
     }
     checkSolution(JsCode);
  });
  
}
function checkSolution(JsCode:string) {
  //const solutions = document.querySelector('#code') as HTMLElement;
  const Message = document.querySelector(".courses-editor-message") as HTMLElement;
  const Result = Array.from(document.querySelectorAll('.courses-editor-code-result p'));

    const Sol1 = Tasks[CurrienNum - 1].solution || "";//solution
    const Sol2 = Tasks[CurrienNum - 1].solution2 || "";//solution2 
   
    let TextResult = "";
      for (const p of Result){
        TextResult += `${" " + p.textContent + " "}`;
      }
 //console.log(Sol1,TextResult)
    if (JsCode.includes(Sol1) && TextResult.includes(`${" " + Sol2 + " "}`)) {
      Message.style.color = "green";
      Message.textContent = "Well Done";
    } else { 
      Message.style.color = "red";
      Message.textContent = "It`s wrong solution try again";
    
    let brakOpen = 0;
    let breakClouse = 0;
for(let i = 0; i<=JsCode.length; i++) {
  if(JsCode[i] == '('){brakOpen++}
  if(JsCode[i] == ')'){breakClouse++}
}
    if(breakClouse !== brakOpen){
      Message.textContent = "SyntaxError: missing ')' or '('";
    }
    let q = 0;
  for(let i = 0; i<=JsCode.length; i++) {
  if(JsCode[i] == "'"){q++}
  }
    if(q % 2 !== 0){
      Message.textContent = "SyntaxError: missing ' ";
    }
}
}
      
  
  
    
  
  
  //const kuku = document.querySelector("#cecr") as HTMLElement;
  
  //const uuu = kuku.children[0];
  //const ttt = kuku.childNodes[0]?.st
  // console.log(uuu.getAttribute("style"));
  /*
      if (j.indexOf(g) !== -1) {
        Message.style.color = "green";
        Message.textContent = "Well Done";
      } else {
        Message.style.color = "red";
        Message.textContent = "It`s wrong solution try again";
      }
    });*/
  /*
    const BtnReset = document.querySelector(".btn-reset") as HTMLButtonElement;
    const previewWindow = document.querySelector(
      ".courses-editor-code-result"
    ) as HTMLElement;
    const HtmlMessage = document.querySelector(
      ".courses-editor-message"
    ) as HTMLElement;
    BtnReset.addEventListener("click", () => {
      JsEditor.setValue("");
      previewWindow.textContent = "";
      HtmlMessage.textContent = "";
    });



      // eval(JsCode);
      // let clear = "";
  
      // if (JsCode) {
      //   clear = JsCode.replace(/console.log/gi, "");
      // }
  
      // let expr: string;
      // const res = 1;
  
      // while (typeof eval(clear) == "string" || typeof eval(clear) == "number") {
      //   expr = clear;
      //   if (expr == null) break;
  
      //   try {
      //     previewWindow.innerHTML = eval(expr);
      //     if (isNaN(res)) {
      //       throw new Error("Результат неопределён");
      //     }
  
      //     break;
      //   } catch (e) {
      //     console.error("edata");
      //   }
      // }
  
  
  //alert( res );
  
  /*
    const res = function R(){
  if(isNaN(eval(clear)) && (eval(clear)) !== null){
      if(typeof eval(clear) == 'string' || typeof eval(clear) == 'number'){
      return eval(clear)
    }
    
    else{
      clear = 'unca';
      return clear
      }
    }
    else return 'ogo'
  }
    previewWindow.innerHTML = res();
    });*/
  
  //function checkSolution(num:number) {
  //const solutions = document.querySelector('#code') as HTMLElement;
  /*const Message = document.querySelector(
      ".courses-editor-message"
    ) as HTMLElement;*/
  /* const Run = document.querySelector(".btn-run") as HTMLElement;
  
    Run.addEventListener("click", () => {
  
      
  
  
    })
  }*/
  
  //const kuku = document.querySelector("#cecr") as HTMLElement;
  
  //const uuu = kuku.children[0];
  //const ttt = kuku.childNodes[0]?.st
  // console.log(uuu.getAttribute("style"));
  /*
      if (j.indexOf(g) !== -1) {
        Message.style.color = "green";
        Message.textContent = "Well Done";
      } else {
        Message.style.color = "red";
        Message.textContent = "It`s wrong solution try again";
      }
    });*/
  /*
    const BtnReset = document.querySelector(".btn-reset") as HTMLButtonElement;
    const previewWindow = document.querySelector(
      ".courses-editor-code-result"
    ) as HTMLElement;
    const HtmlMessage = document.querySelector(
      ".courses-editor-message"
    ) as HTMLElement;
    BtnReset.addEventListener("click", () => {
      JsEditor.setValue("");
      previewWindow.textContent = "";
      HtmlMessage.textContent = "";
    });
    }*/
  