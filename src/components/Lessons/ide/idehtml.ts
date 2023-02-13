import "../ide/lib/codemirror.js";
import "../ide/mode/xml/xml.js";

  export function IdeHtml() {
    const main = document.querySelector('main') as HTMLElement;
    main.innerHTML = "";
    main.innerHTML +=`
                <div class="editor">
                     <div class="code">
                         <div class="html-code"></div>
                     </div>
                </div>
    `;
    const WindowIdeHtml = document.querySelector(".editor .code .html-code") as HTMLElement;
    const htmlEditor = CodeMirror(WindowIdeHtml ,{
    lineNumbers: true,
    tabSize:4,
    mode:"xml",
    theme:"dracula"
  });
 
    const BtnRun = document.querySelector('.btn-run') as HTMLElement;
    BtnRun.addEventListener('click',()=>{
    const htmlCode = htmlEditor.getValue();
    const previewWindow = document.querySelector('#preview-window') as HTMLElement;
    previewWindow.innerHTML = htmlCode;
  });
}