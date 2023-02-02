import "../Main/Main";
import palm from "../../assets/img/palm.jpg";

console.log("From App");

const img = <HTMLImageElement>document.querySelector(".test-img");
img.src = palm;
