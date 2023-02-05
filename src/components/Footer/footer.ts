//import rss from "../../assets/img/rss.svg";
export function Footer():void {
    const footer = document.querySelector('footer') as HTMLElement;
    
    footer.innerHTML = "";
    footer.innerHTML +=`
    <section class="footer-black-wrap">   
    <div class="footer-cont">
       <div class="footer-up">
         <div class="footer-content">
             <div class="git-name-cont">
               <div class="git-name-box">
                 <div class="git-logo"></div>
                 <a href="https://www.github.com/v-nv" class="a-footer">
                 <p class="git-name1">Nikolay</p>
                </a>
               </div>
               <div class="git-name-box2">
                 <div class="git-logo"></div>
                   <a href="https://www.github.com/alexgorser" class="a-footer">
                 <p class="git-name2">Aleksey</p>
                </a>
               </div>
               
               <div class="git-name-box3">
                 <div class="git-logo"></div>
                    <a href="https://www.github.com/fedormalinin" class="a-footer">
                      <p class="git-name3">Fedor</p>
                    </a>
               </div>
               
             </div>
               <a class="a-footer" href="https://rs.school">
                  <div class="rss-logo"></div>
               </a>
             </div>
             <div class="footer-year">© 2023, Homo coderus, Inc</div>
</section> 
    `;
}
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    /*`
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
}*/