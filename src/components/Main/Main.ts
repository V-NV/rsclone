//import logo from "../../../assets/img/logo.png";
export function Main():void {
  const main = document.querySelector('main') as HTMLElement;
  
  main.innerHTML = "";
  main.innerHTML +=`
  <section class="main-content">
      <div class="item response">
        <p class="p-response">Проверь свои знания</p>
      </div>
      <div class="item drag-drop">
        <p class="p-response">Составь в правильном порядке</p>
      </div>
      <div class="item frogy">
        <p class="p-response">Flex-box игра</p>
      </div>
      <div class="item">
       
      </div>
      <div class="item">
       
      </div>
      <div class="item coding">
       
      </div>
    </section>
  `;
}
