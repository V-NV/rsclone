import CodeMirror from "codemirror";
import "../../../../node_modules/codemirror/lib/codemirror.css";
import "../../../../node_modules/codemirror/theme/dracula.css";
import "../../../../node_modules/codemirror/mode/javascript/javascript.js";

export function IdeHtml() {
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
  const WindowIdeHtml = document.querySelector(".html-code") as HTMLDivElement;
  const htmlEditor = CodeMirror(WindowIdeHtml, {
    lineNumbers: true,
    tabSize: 4,
    mode: "javascript",
    theme: "dracula",
  });

  const BtnRun = document.querySelector(".btn-run") as HTMLButtonElement;
  BtnRun.addEventListener("click", () => {
    const htmlCode = htmlEditor.getValue();
    const previewWindow = document.querySelector(
      "#preview-window"
    ) as HTMLElement;
    previewWindow.innerHTML = htmlCode;
  });
}
