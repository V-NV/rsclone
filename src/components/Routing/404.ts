
export function page404():void {
    const main = document.querySelector("main") as HTMLElement;
    main.innerHTML = "";
    main.innerHTML += `<section class="page-404-wrap">
      <div class="page-404-cont">
      
      <h1> Тут Федор нарисует чего-нибудь </h1>
      
      <div>
      </section>
`    
}