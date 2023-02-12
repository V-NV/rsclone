import CourseTemplate from "../pages/CourseTemplate";
import jsTasks from '../courses/jsTasks/jsTasks'
import JSLogo from '../../assets/img/JS/JSlogo.png'
import JSGif from '../../assets/img/JS/JSGif.gif'

export const JavaScript = ():void => {
    const main = document.querySelector('main') as HTMLElement;
    main.innerHTML = "";
    main.innerHTML +=
    `
      <section class="main-wrap">
        <div class="main-cont">
          ${CourseTemplate(jsTasks, JSGif, JSLogo)}
        </div>
      </section>`;
}