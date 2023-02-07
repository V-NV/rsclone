import { javascriptOn } from "../View/javascriptOn";

export function Main():void {
  const main = document.querySelector('main') as HTMLElement;
  //main.className = "present-main-wrap";
  main.innerHTML = "";
  main.innerHTML +=` <section class="present-main-wrap">
  <div class="present-main-cont">
      
      <div class="present-up-block">
          <div class="present-left-up-box">
             <div class="present-up-p-box">
                <p class="present-up-p">Learn to Programming for Free</p>
                <p class="present-up-p2" >Learn HTML, CSS and JavaScript</p>
             </div>
                <div class="present-up-button">TRY NOW!</div>

          </div>
          <div class="present-right-up-box">

          </div>

      </div>
</section>
<!--ggggggggggggggggggggggggggggggggg--> 
<section class="present-midle-wrap">

    <div class="present-midle-block">
         <div class="present-midle-course-box">COURSES</div>
            <div class="present-midle-lang-cont">
               
              <div class="present-midle-html-box">
                    <div class="pres-midle-img-box1"></div>
                    <div class="pres-midle-rect">
                       <p class="pres-p-html1">HTML</p>
                       <p class="pres-p-html2">11 hours</p>
                    </div>  

               </div>
               <div class="present-midle-css-box">
                  <div class="pres-midle-img-box2"></div>
                  <div class="pres-midle-rect">
                      <p class="pres-p-css1">CSS</p>
                      <p class="pres-p-css2">8 hours</p>
                  </div>    
   
               </div>
               <div class="present-midle-js-box">
                  <div class="pres-midle-img-box3"></div>
                  <div class="pres-midle-rect">
                      <p class="pres-p-js1">JAVASCRIPT</p>
                      <p class="pres-p-js2">25 hours</p>
                  </div>    
              </div>
          </div> 
     </div>
</section>  
  <!--ggggggggggggggggggggggggggggggggg--> 
<section class="present-bottom-wrap">

      <div class="present-bottom-block">
           <div class="present-bottom-course-box">REVIEWS</div>
              <div class="present-bottom-cont">
                   <div class="durov-cont">
                     <div class="durov-img-box">
                     </div>
                     <div class="durov-text-box">
                         <p class="durov-p-1">Pavel Durov:</p>
                         <p class="durov-p-2">Very good courses. I learned so fast HTML and a bit JavaScript. Thank you guys, Nikolay especially. Alexey can you call me on the week? Need to talk about some deal.</p>
                         <p class="durov-p-3">Pavel completed course: HTML</p>
                     </div>
                  </div>
                   <div class="buterin-cont">
                      <div class="buterin-text-box">
                         <p class="buterin-p-1">Vitalik Buterin:</p>
                         <p class="buterin-p-2">OMG this is better than my silly project named “Ethereum”. Can you visit me in Canada because i have business offer for you. My number +12064512559 CALL ME NOW.</p>
                         <p class="buterin-p-3">Vitalik completed course: JavaScript.</p>
                      </div>
                      <div class="buterin-img-box">
                      </div>
                   </div>

              </div>
          </div>    
</section>`;
javascriptOn();
}
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  /*`
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
  //PagePresent();
}*/
/*
import logo from "../../assets/img/logo-black.png";
function PagePresent():void {
  const header = document.querySelector('header') as HTMLElement;
  header.style.display = "none";

  const main = document.querySelector('main') as HTMLElement;
  main.style.display = "none";

  const Present = document.querySelector('.present') as HTMLElement;
  Present.style.display = "block";

  Present.innerHTML = "";
  Present.innerHTML +=`
  <section class="page-discr">
    <div class="discr-header">
      <div class="logo-box-discr">
        <img class="logo" src="${logo}" alt="logo">
      </div>
      <div class="header-btn-cont-left-discr">
      <div class="header-btn course-discr">courses</div>
    
      <div class="header-btn about">About</div>
    </div>
    <div class="header-btn-cont-right">
      <div class="header-btn">SIGN IN</div>
      <div class="header-btn">SIGN UP</div>
      <div class="header-btn">RU/EN</div>
    </div>
    </div>    
  </section>
  `;
}*/