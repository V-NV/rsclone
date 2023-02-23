import Cookies from "js-cookie";
import { IToken, TLoginUser } from "../../types/api.interface";
import { loginUser } from "../Api/register-login.api";
// import { Main } from "../Main/Main";
import {
  checkRequired,
  checkEmail,
  checkPassword,
} from "../Service/auth.login.service";

export function SignIn(): void {
  const main = document.querySelector("main") as HTMLElement;
  main.innerHTML = "";
  main.innerHTML += `<section class="signin-main-wrap">
    <div class="signin-main-cont">
       <div class="signin-img"></div>
       <div class="signin-form-cont">
          <div class="signin-form-box">
            <form class="form" id="form">
                           
              <div class="form-control">
                <label for="email"> Email</label>
                <input type="text" id="email" placeholder="Enter Email" autocomplete="off"/>
                <small>Error</small>
              </div>

              <div class="form-control">
                <label for="password"> Password</label>
                <input type="text" id="password" placeholder="Enter password" autocomplete="off"/>
                <small>Error</small>
              </div>
            
            
            <button type="submit" class="form-button" id="form-button">   Sign In</button>
        </form>       
          </div>
       </div>
    </div>
</section>;`;
  FormSignIn();
}
// <p class="signin-signup">Forgot<a class="p-link-signin">   Password?</a></p>
function FormSignIn(): void {
  const form = document.getElementById("form") as HTMLFormElement;
  const email = document.getElementById("email") as HTMLInputElement;
  const password = document.getElementById("password") as HTMLInputElement;

  form.addEventListener("submit", async function (e: Event) {
    let body: TLoginUser = { email: "", password: "" };
    let created: IToken = { username: "", accessToken: "", refreshToken: "" };
    e.preventDefault();
    checkRequired([email, password]);
    checkEmail(email) && checkPassword(password)
      ? ((body = {
          email: email.value,
          password: password.value,
        }),
        (created = await loginUser(body)),
        Cookies.set("username", created.username),
        Cookies.set("user_session", created.accessToken))
      : console.log("no validate");

    created ? setTimeout(() => location.reload(), 2000) : null;
  });
}
