import CodeMirror from "codemirror";
import "../../../../node_modules/codemirror/lib/codemirror.css";
import "../../../../node_modules/codemirror/theme/dracula.css";
import "../../../../node_modules/codemirror/mode/xml/xml.js";

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

const BtnReset = document.querySelector(".btn-reset") as HTMLButtonElement;
const previewWindow = document.querySelector(".courses-editor-code-result") as HTMLElement;
const HtmlMessage = document.querySelector(".courses-editor-message") as HTMLElement;
  BtnReset.addEventListener("click", () => {
    //const htmlCode = htmlEditor.setValue('');
    previewWindow.textContent = ''
    HtmlMessage.textContent = "";
  });
}
