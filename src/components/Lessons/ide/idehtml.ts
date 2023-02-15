import CodeMirror from "codemirror";
import "../../../../node_modules/codemirror/lib/codemirror.css";
import "../../../../node_modules/codemirror/theme/dracula.css";
import "../../../../node_modules/codemirror/mode/xml/xml.js";

import { Tasks } from "../lessons";
import { CurrienNum } from "../lessons";

export function IdeHtml() {
  const main = document.querySelector(
    ".courses-editor-code-cont"
  ) as HTMLElement;
  main.innerHTML = "";
  main.innerHTML += `
                <div class="editor">
                     <div class="code">
                         <div class="html-code" id="code"></div>
                     </div>
                </div>
    `;
  const WindowIdeHtml = document.querySelector(".html-code") as HTMLDivElement;
  const htmlEditor = CodeMirror(WindowIdeHtml, {
    lineNumbers: true,
    tabSize: 4,
    mode: "xml",
    theme: "dracula",
  });

  const BtnRun = document.querySelector(".btn-run") as HTMLButtonElement;
  BtnRun.addEventListener("click", () => {
    const htmlCode = htmlEditor.getValue();
    const previewWindow = document.querySelector(
      ".courses-editor-code-result"
    ) as HTMLElement;
    previewWindow.innerHTML = htmlCode;
  });
  const Message = document.querySelector(".courses-editor-message") as HTMLElement;
  const Run = document.querySelector('.btn-run') as HTMLElement;

  Run.addEventListener('click', () => {

const g = Tasks[CurrienNum-1].solution || "";
const j = htmlEditor.getValue().replace(/\s/g,'')//replace(/ /g,'');
console.log(j)
if(j.indexOf(g) !== -1){
Message.style.color = 'green';
Message.textContent = "Well Done";
}
else{
Message.style.color = 'red';
Message.textContent = "It`s wrong solution try again";
   }
 })


  
const BtnReset = document.querySelector(".btn-reset") as HTMLButtonElement;
const previewWindow = document.querySelector(".courses-editor-code-result") as HTMLElement;
const HtmlMessage = document.querySelector(".courses-editor-message") as HTMLElement;
  BtnReset.addEventListener("click", () => {
    htmlEditor.setValue('');
    previewWindow.textContent = "";
    HtmlMessage.textContent = ""; 
  });

}
