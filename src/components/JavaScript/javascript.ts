import home from "../../assets/img/JS/home.png";
import watch from "../../assets/img/JS/watch.png";
import student from "../../assets/img/JS/student1.png";
import students from "../../assets/img/JS/studentnew.png";

export function JavaScript():void {
    const main = document.querySelector('main') as HTMLElement;
    main.innerHTML = "";
    main.innerHTML +=`<section class="js-main-wrap">
    <div class="js-main-cont">
        <div class="js-home">
          <p class="js-imeges"><img src="${home}" alt="home">&nbsp&nbsp&nbsp&#10230&nbsp&nbsp&nbspJavaScript</p>
        </div>
        <div class="js-gif-cont">
        </div> 
      
        <div class="js-free-course">
            <div class="js-free-course-left">
                <div class="js-free-header">
                  Free course
                </div>
                <div class="js-free-parag">
                  JavaScript: Perfect for beginners
                </div>
                <div class="js-free-text">
                  Programming learning is an interesting and exciting process.
                  The syntax of the language is the simplest and shortest path,
                  without which it is impossible to start. This free online JavaScript 
                  course will introduce you to the basic concepts of the language. 
                  Learn the basics and write your first JS programs.
                </div>
                <div class="js-free-icon-box">
                  <p class="js-icon-string">
                    <img class="js-free-img" src="${watch}" alt="watch">  6 hours &nbsp&nbsp&nbsp
                    <img class="js-free-img" src="${student}" alt="students"> 982 students &nbsp&nbsp&nbsp
                    <img class="js-free-img" src="${students}">10 lessons with practice in the browser
                  </p>
                </div>
                <div class="js-free-button-box">
                   <div class="js-free-btn js-start">Start Learning!</div>
                   <div class="js-free-btn js-signup">Sign Up</div>
                </div>
            </div>
            <div class="js-free-course-right">

            </div>
        </div>
        <div class="js-free-basics">
          <p>JavaScript basics</p>
        </div>
        <div class="js-basics-cont">
          <div class="js-basics-left">
            <div class="js-basics-p">1. Hellow world!</div>
            <div class="js-basics-p">2. Comments</div>
            <div class="js-basics-p">3. Statements</div>
            <div class="js-basics-p">4. How do you verify your solutions?</div>
            <div class="js-basics-p">5. Syntax Error</div>
          </div>
          <div class="js-basics-right">
            JavaScript is one of the most popular programming languages in the world.
             It is used to build interactive web pages, mobile applications, and in 
             server-side development. You will learn JS from scratch, from the very beginning.
          </div>
        </div>

        <div class="js-free-arithm">
          <p>Arithmetic</p>
        </div>
        <div class="js-arithm-cont">
          <div class="js-arithm-left">
            <div class="js-arithm-p">6. Arithmetic operations</div>
            <div class="js-arithm-p">7. Operators</div>
            <div class="js-arithm-p">8. Commutative operations</div>
            <div class="js-arithm-p">9. Composition of operations</div>
            <div class="js-arithm-p">10. Operator precedence</div>
          </div>
          <div class="js-arithm-right">
            The simplest and basic topic in programming is arithmetic. In this module, 
            you will translate arithmetic operations into the programming language, 
            talk about the operator precedence and operations with fractional numbers.
          </div>
        </div>
    </div>
  </section>`;
}