import rss from "../../assets/img/rss.svg";
export function Footer():void {
    const footer = document.querySelector('footer') as HTMLElement;
    
    footer.innerHTML = "";
    footer.innerHTML +=`
      <div class="footer-container">
        <div class="footer-data">
           <p class="copyright">©</p>
           <p class="year">2023</p>
           
           <a class="github-username" href="https://github.com/v-nv">Nikolay</a>
           <a class="github-username" href="https://github.com/AlexGorSer">Aleksey</a>
           <a class="github-username" href="https://github.com/FedorMalinin">Fedor</a>
        </div>
        <a class="rss-logo" href="https://rs.school">
          <div class="footer-logo-box">
            <img src="${rss}" alt="rss-logo">
          </div>
        </a>
      </div>
    `;
}