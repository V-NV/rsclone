export function AboutPage():void {
    const main = document.querySelector('main') as HTMLElement;
    //main.className = "present-main-wrap";
    main.innerHTML = "";
    main.innerHTML +=` 
    <section class="about-main-wrap">
      <div class="about-main-cont">

          <p class="about-title">OUR TEAM</p>
          <div class="team-container">
            <div class="member-container">
              <div class="member-img member_01"></div>
              <h2 class="member-name">Nikolay</h2>
              <span class="member-sub">The Godfather. TypeScript king.</span>
            </div>
            <div class="member-container">
              <div class="member-img member_02"></div>
              <h2 class="member-name">Alexey</h2>
              <span class="member-sub">Hardworking. Git specialist.</span>
          </div>
          <div class="member-container">
            <div class="member-img member_03"></div>
            <h2 class="member-name">Fedor</h2>
            <span class="member-sub">What is he doing here?</span>
        </div>
        </div>
        <div class="about-us-cont">
          <p class="about-title">ABOUT US</p>
          <p class="about-us-text">Our project it's a free open-source platform
             created to learn beginner-level coding. Our project features 
             interactive tutorials and exercises designed for people without 
             strong coding skills. For the time being, our project features 
             tutorials on HTML, CSS and JavaScript.
          </p>
        </div>
        <div class="about-why-cont">
          <p class="about-title">WHY WAS OUR PROJECT CREATED?</p>
          <p class="about-why-text">As far as beginner-level coding is 
            concerned, the internet mostly offers code reference textbooks 
            and courses where you just follow a tutor mindlessly.
          </p>
          <p class="about-mission">The mission of our project is to provide an adequate 
            starting ground. We want beginner programmers to use the 
            best coding practices, name functions correctly and understand 
            the systems, rather than just memorize specifics.
          </p>
        </div>
        <div class="about-free-box">
           <p class="about-title">IS IT FREE?</p>
           <p class="about-bottom">Our courses are completely free.</p>
        </div>
    </div>
</section>`;
}