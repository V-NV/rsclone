import "../ide/lib/codemirror.js";
import "../ide/mode/css/css.js";

  export function IdeCss() {
    const main = document.querySelector('main') as HTMLElement;
    main.innerHTML = "";
    main.innerHTML +=`
                <div class="editor">
                     <div class="code">
                         <div class="html-code"></div>
                     </div>
                </div>
    `;
    const WindowIdeCss = document.querySelector(".editor .code .html-code") as HTMLElement;
    const cssEditor = CodeMirror(WindowIdeCss ,{
    lineNumbers: true,
    tabSize:4,
    mode:"css",
    theme:"dracula"
  });
 
    const BtnRun = document.querySelector('.btn-run') as HTMLElement;
    BtnRun.addEventListener('click',()=>{
    const cssCode = "<Style>" + cssEditor.getValue() + "</style>";
    const previewWindow = document.querySelector('#preview-window') as HTMLElement;
    previewWindow.innerHTML = cssCode;
  });
}