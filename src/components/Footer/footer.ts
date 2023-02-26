//import rss from "../../assets/img/rss.svg";

export async function Footer() {
  const footer = document.querySelector("footer") as HTMLElement;

  footer.innerHTML = "";
  footer.innerHTML += `
    <section class="footer-black-wrap">   
    <div class="footer-cont">
       <div class="footer-up">
         <div class="footer-content">
             <div class="git-name-cont">
               <div class="git-name-box">
               <a href="https://www.github.com/v-nv" class="a-footer">
                 <div class="git-logo"><svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                 <path fill-rule="evenodd" clip-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" transform="scale(64)" />
                 </svg>
                 </div>

                 <p class="git-name1">Nikolay</p>
                </a>
               </div>
               <div class="git-name-box2">
               <a href="https://www.github.com/alexgorser" class="a-footer">
                 <div class="git-logo"><svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                 <path fill-rule="evenodd" clip-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" transform="scale(64)" />
                 </svg>
                 </div>

                 <p class="git-name2">Aleksey</p>
                </a>
               </div>
               
               <div class="git-name-box3">
               <a href="https://www.github.com/fedormalinin" class="a-footer">
                 <div class="git-logo"><svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                 <path fill-rule="evenodd" clip-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" transform="scale(64)" />
                 </svg>
                 </div>
                      <p class="git-name3">Fedor</p>
                    </a>
               </div>
               
             </div>
               <a class="a-footer" href="https://rs.school">
                  <div class="rss-logo"><svg xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 1008 375"><path d="M587.5 10.7c-13.1 1.2-31.3 6.6-39.4 11.7-14.2 9-21 23-19.8 41.1.7 11.5 3.7 18.7 10.6 25.6 9.5 9.4 22.8 15.6 50.9 23.5 21.1 5.9 30.2 12 30.2 19.9 0 4-5.1 10.2-10.4 12.6-4.7 2.1-14.5 2.5-19.7.7-8.8-3-14.9-9.4-16.8-17.8-1.4-6.2-2.9-7-13.5-7-11.4 0-37.6 1.7-38.4 2.5-1 1 1.9 13.7 4.5 19.9 3.3 7.9 10 18.2 14.8 22.9 11.2 10.9 39.7 17.3 65.3 14.8 22.5-2.3 38.8-8.1 49.1-17.6 3.2-3 6.1-5.5 6.3-5.5.3 0 .8 2 1.1 4.5 1 6.8 4.5 16.4 8.5 23 7.1 11.7 22.5 25.6 35.7 32.3 5.1 2.5 18.4 6.8 25.8 8.2l5.8 1.2-2.6 3.4c-13 17.1-18.5 34.8-18.5 59.9 0 37.6 13.3 62.4 40.5 75.6 15.4 7.4 22.8 8.9 44.7 8.9 15.4 0 19.7-.3 26.3-2.1 21-5.5 36.3-15.9 46.9-31.9l3.6-5.5V373h129v-42h-75l-.2-61.2-.3-61.3h-53l-.3 17.2c-.1 9.5-.6 17.3-1.1 17.3-.4 0-1.3-1.1-1.8-2.3-1.8-3.9-12.2-14.5-18.7-19.2-9.1-6.4-17.8-10.4-28.5-13.1-5.2-1.3-9.6-2.6-9.8-2.7-.1-.2 2.8-2.5 6.5-5.2 30.6-22.3 51.2-60.9 51.2-95.7-.1-33.5-16.7-60.8-45.5-74.4-27.9-13.3-63.2-12.3-95.9 2.5-24.8 11.2-50.7 36.6-63.7 62.3-1.6 3.2-3.3 5.8-3.8 5.8-.4 0-4.6-3.5-9.4-7.8-12.9-11.8-21.6-15.8-51.8-23.6-16.8-4.3-24-7-27.9-10.3-3.7-3.1-3.8-5.2-.3-9.4 4.9-5.7 13.5-7.5 22.1-4.5 6.4 2.3 10.2 5.6 13.3 11.7 1.5 3.1 3.5 5.9 4.4 6.3.9.3 5 .6 9.1.6 8 0 37.7-2 38.3-2.6.9-.9-2.4-14-5-19.5-10.1-21.2-40.6-34.2-73.4-31.2zM812.7 29c20.5 4.9 38.2 17.5 48.2 34.3 13 21.9 14.1 53.1 2.9 80.7-15.4 37.8-49.4 65.6-92.3 75.6-11.7 2.8-35 2.5-46-.4-28.9-7.8-50.3-28.6-57.7-56.1-3.1-11.5-2.9-30.3.5-43.3 9.1-34.5 32.8-62.8 67.2-80.1 12.6-6.3 29.1-11.2 43.5-13.1 7-.9 25.7.4 33.7 2.4zm-1.8 218.1c13.9 3.1 22.8 18.1 23.8 39.9.8 17.8-3.6 31.9-12.8 41.2-11.8 11.8-33.6 10.2-43.4-3.2-13.8-18.8-11.9-58.4 3.3-72.2 5.2-4.7 7.4-5.8 13.1-6.7 5-.8 9.1-.5 16 1z"/><path d="M783.9 66.3c-6.5 1.8-13.6 6.3-19.7 12.4-8.8 8.8-11.2 17.3-7.3 25.9 4.8 10.5 16 12.8 34.7 7 13.1-4 14-4.1 16.9-1.2 3.3 3.3 3.2 5.1-.9 9.2-2.9 2.9-4.1 3.4-8.3 3.4-2.7 0-5.4-.5-6-1.1-2.7-2.7-15.2 3-18.8 8.5-3 4.6 1.5 9.1 10.6 10.5 18.4 3 39.8-10.8 44.4-28.4 2-8 .5-14.5-4.7-19.1-7.8-7.1-16.5-7.6-35-2-7.1 2.1-13.5 3.6-14.3 3.2-2.5-.9-1.7-5.5 1.4-8.7 3.2-3.1 8.5-3.9 12-1.8 1.4 1 2.8.7 6.9-1.6 2.7-1.5 6.5-4.2 8.3-6.1l3.3-3.4-2.4-2.5c-4-4.2-13.7-6.2-21.1-4.2zM725.2 105.7c-2.8 2.1-5.3 4.4-5.6 5.1-.9 2.2 1.2 6.1 10.3 19.1 14.3 20.4 17.4 27.4 13.9 30.9-1.8 1.8-6.2 1.4-9.2-.9-3-2.4-4.9-2-9.2 2-4.6 4.1-6.4 7.2-6.4 10.6 0 8.3 13.7 12.2 26.3 7.5 6.7-2.5 17.8-11.6 20.3-16.6 3.7-7.6 1.5-17.7-6.8-30.9-6.1-9.7-19.2-27.7-21.2-29.1-3.3-2.3-6.9-1.6-12.4 2.3zM11 97v83h53v-66h4.6c9.6 0 14 5.5 34.1 42.5l12 22 28.8.3c15.9.1 29.3-.2 29.7-.6 4-4-32.3-63-42.3-68.9-1.6-1-2.9-2-2.9-2.4 0-.4 3.1-2.3 6.8-4.2 17.3-9.1 26.2-23.3 26.2-41.6 0-12.7-3.8-22.8-11.8-31.4-5.7-6-10.6-9.3-18.1-11.9-6.9-2.3-38.2-3.7-87.8-3.8H11v83zm91.1-44.2c10.2 6.3 8.8 16.2-3.1 22.3-5.9 3-13.6 4.5-26.7 5.2l-8.3.5v-31l17.3.3c15.7.4 17.5.6 20.8 2.7zM194.3 205.4c-18.9 3.6-31.4 10.2-46.4 24.3-6.5 6.2-7.3 6.6-8.3 4.9-5.1-8.4-7.2-11.1-12.3-15-10.6-8.4-26.7-13.3-46.5-14.3-36.2-1.7-62.7 10-70.8 31.4-6.7 17.7-3.6 35.7 8 47.1 9.5 9.4 22.4 15.3 48 22.2 17.2 4.6 26.8 8.7 29.9 12.7 1.4 1.7 2.1 4 2.1 7.2 0 9.6-6.9 15-19.1 15.1-13.7 0-23.3-6.4-26.5-17.8-1.1-4.1-2.5-6.7-3.8-7.4-1.4-.7-8.3-.9-22.1-.4-25.4.8-26.5 1-26.5 4.5 0 4.5 3.9 19 6.7 24.9 3.5 7.4 13.9 17.8 21.6 21.5 13.2 6.4 33.8 9.3 58.6 8.4 24.6-.9 32.3-3.9 47.4-18.6l9.9-9.6 2.1 3c7 10.1 20.2 18.2 36.7 22.7 7.6 2.1 10.6 2.3 29.5 2.3 20-.1 21.4-.2 30-2.9 10.4-3.2 18.7-7.4 24.5-12.3 9.4-8 22.5-33 20.5-39.2-.8-2.5-4.8-4.2-24-10-9.4-2.8-17.7-5.4-18.7-5.7-1.2-.4-2 .7-3.3 4.8-4 12-9.8 19.8-18 24.1-6.2 3.2-16.8 3.5-23.3.7-6.1-2.6-12.5-9.2-15.3-15.7-5.1-11.9-4.5-43.1 1-54.9 5.5-11.8 14.7-17.8 27.1-17.8 10.6-.1 16.7 3.4 23.1 12.9 2.5 3.7 5.4 7.2 6.4 7.8 2.1 1.1 7.9.2 27.6-4.4 7.1-1.7 13.8-3.8 15-4.8l2.1-1.6-2.2-5.5c-3.3-8.3-10.4-18.3-17.8-25-8-7.3-23-15.1-34.7-18.1-10.4-2.6-28.6-3.3-38.2-1.5zM79.6 239.1c5.7 1.5 9.9 5.6 13.7 13.6 2.4 5.3 3.2 6.2 5 5.9 1.2-.3 9.1-.8 17.5-1.1l15.2-.6v2.8c0 5.4-2 14.7-3.4 16.2-1.3 1.2-2.4 1.1-9.3-1.6-9.2-3.6-16.3-5.8-37.3-11.3-18.8-4.9-23.5-7-24.9-11.1-3.2-9.2 9.7-16.3 23.5-12.8zM562.5 206c-19.6 3.1-40.8 15.2-51.6 29.5-2.3 3-4.5 5.5-5 5.5s-1-7.3-1.1-16.3l-.3-16.2h-53l-.3 28.2-.2 28.3h-52l-.2-28.3-.3-28.2h-53l-.3 82.2-.2 82.3h54v-65h52v65h54l.2-17.6.3-17.6 3.9 5.6c9.1 13.2 24.2 23.3 43.1 28.8 7.3 2.1 9.9 2.3 30 2.3 21.5 0 22.2-.1 30.5-2.9 14-4.6 21.6-9.2 30.5-18.1 6.5-6.4 9-9.9 12.8-17.5 20.6-41.1 9.4-96.7-23.6-118.1-6.5-4.2-17.4-8.1-28.7-10.4-9.3-1.9-33.5-2.7-41.5-1.5zm32.1 42.8c11.6 5.9 19.4 23.8 19.4 44.1-.1 27.6-11.5 42.5-32.5 42.5-10.5 0-16.7-2.6-23.5-10.1-7.5-8.2-9.5-15.5-9.5-34.8.1-13.2.3-15.7 2.4-20.7 4.5-11.5 12.6-20 21.5-22.8 5.2-1.6 17.6-.6 22.2 1.8z"/></svg></div>
               </a>
             </div>
             <a class="a-footer" href="https://github.com/V-NV/rsclone">
               <div class="footer-year">© 2023, Homo coderus, Inc</div>
             </a>
    </section> 
    `;
}