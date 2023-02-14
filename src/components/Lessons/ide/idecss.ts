import CodeMirror from "codemirror";
import "../../../../node_modules/codemirror/lib/codemirror.css";
import "../../../../node_modules/codemirror/theme/dracula.css";
import "../../../../node_modules/codemirror/mode/css/css.js";

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
    mode: "css",
    theme: "dracula",
  });

  const BtnRun = document.querySelector(".btn-run") as HTMLButtonElement;
  BtnRun.addEventListener("click", () => {
    const CssCode = CssEditor.getValue();
    const previewWindow = document.querySelector(
      ".courses-editor-code-result"
    ) as HTMLElement;
    previewWindow.innerHTML = CssCode;
  });
}