import CodeMirror from "codemirror";
import "../../../../node_modules/codemirror/lib/codemirror.css";
import "../../../../node_modules/codemirror/theme/dracula.css";
//import "../../../../node_modules/codemirror/mode/smarty/smarty";
//import "../../../../node_modules/codemirror/mode/xml/xml.js";
import "../../../../node_modules//codemirror/mode/javascript/javascript.js";
//import "../../../../node_modules//codemirror/mode/css/css.js";
//import "../../../../node_modules//codemirror/mode/htmlmixed/htmlmixed.js";

//import { Tasks } from "../lessons";
//import { CurrienNum } from "../lessons";

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
    //maxHighlightLength:1,  // ограничение длинны подсветки
  });

  const BtnRun = document.querySelector(".btn-run") as HTMLButtonElement;
  BtnRun.addEventListener("click", () => {
    const JsCode = JsEditor.getValue();
    const previewWindow = document.querySelector(
      ".courses-editor-code-result"
    ) as HTMLElement;
    
  let clear = "";
 
  if(JsCode){
       clear = JsCode.replace(/console.log/ig, "")
      
     }
  
let expr:string;
const res = 1;

while (typeof eval(clear) == 'string' || typeof eval(clear) == 'number') {
  expr = clear;
  if (expr == null) break;

  try {
    previewWindow.innerHTML = eval(expr);
    if (isNaN(res)) {
      throw new Error("Результат неопределён");
    }

    break;
  } catch (e) {
    console.error ('edata');
  }
}
})
}

  

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