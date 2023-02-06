import { AboutPage } from "../About/about";

export function AboutOn() {
  const about = document.querySelector('.about') as HTMLElement;
    about.addEventListener('click',() => {
      AboutPage();
    }
)}








/*export function AboutOn() {
    const about = document.querySelector('.about') as HTMLElement;
      about.addEventListener('mouseover',() => {
      const mv = document.querySelector('.header-about') as HTMLElement;
      mv.style.display = 'flex';
    });
      AboutOff();
    }
    
    
    
    
    
    /*
    function AboutOff() {
      const about = document.querySelector('.about') as HTMLElement;
        about.addEventListener('mouseout',() => {
        const clouse = document.querySelector('.header-about') as HTMLElement;
        clouse.style.display = 'none';
      });
    }
    export function AboutContent() {
    const about = document.querySelector('.about') as HTMLElement;
    const ModalAbout = document.createElement('div');
    ModalAbout.className = 'header-about';
    ModalAbout.innerHTML = `
      <p class="p-about">Финальный проект</p>
      <p class="p-about">RS-CLONE 2023</p>
      <p class="p-about">Выполнен студентами потока</p>
      <p class="p-about">2022Q3</p>
      <p class="p-about">Николай</p>
      <p class="p-about">Алексей</p>
      <p class="p-about">Федор</p>
    `;
    ModalAbout.style.display = "none";
    about.insertAdjacentElement('beforeend', ModalAbout);
    }*/