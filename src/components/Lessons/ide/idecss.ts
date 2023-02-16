import CodeMirror from "codemirror";
import "../../../../node_modules/codemirror/lib/codemirror.css";
import "../../../../node_modules/codemirror/theme/dracula.css";
//import "../../../../node_modules/codemirror/mode/smarty/smarty";
import "../../../../node_modules/codemirror/mode/xml/xml.js";
import "../../../../node_modules//codemirror/mode/javascript/javascript.js";
import "../../../../node_modules//codemirror/mode/css/css.js";
import "../../../../node_modules//codemirror/mode/htmlmixed/htmlmixed.js";

import { Tasks } from "../lessons";
import { CurrienNum } from "../lessons";

export function IdeCss() {
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
  const WindowIdeCss = document.querySelector(".html-code") as HTMLDivElement;
  const CssEditor = CodeMirror(WindowIdeCss, {
    lineNumbers: true,
    tabSize: 4,
    mode: "htmlmixed",
    theme: "dracula",
    //maxHighlightLength:1,  // ограничение длинны подсветки
  });

  const BtnRun = document.querySelector(".btn-run") as HTMLButtonElement;
  BtnRun.addEventListener("click", () => {
    const CssCode = CssEditor.getValue();
    const previewWindow = document.querySelector(
      ".courses-editor-code-result"
    ) as HTMLElement;
    previewWindow.innerHTML = CssCode;
  });

  //function checkSolution(num:number) {
  //const solutions = document.querySelector('#code') as HTMLElement;
  const Message = document.querySelector(
    ".courses-editor-message"
  ) as HTMLElement;
  const Run = document.querySelector(".btn-run") as HTMLElement;

  Run.addEventListener("click", () => {
    const g = Tasks[CurrienNum - 1].solution || "";
    const j = CssEditor.getValue().replace(/\s/g, ""); //replace(/ /g,'');
    console.log(j);

    const kuku = document.querySelector("#cecr") as HTMLElement;

    const uuu = kuku.children[0];
    //const ttt = kuku.childNodes[0]?.st
    console.log(uuu.getAttribute("style"));

    if (j.indexOf(g) !== -1) {
      Message.style.color = "green";
      Message.textContent = "Well Done";
    } else {
      Message.style.color = "red";
      Message.textContent = "It`s wrong solution try again";
    }
  });

  const BtnReset = document.querySelector(".btn-reset") as HTMLButtonElement;
  const previewWindow = document.querySelector(
    ".courses-editor-code-result"
  ) as HTMLElement;
  const HtmlMessage = document.querySelector(
    ".courses-editor-message"
  ) as HTMLElement;
  BtnReset.addEventListener("click", () => {
    CssEditor.setValue("");
    previewWindow.textContent = "";
    HtmlMessage.textContent = "";
  });
}
