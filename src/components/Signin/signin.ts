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
    <svg xmlns="http://www.w3.org/2000/svg" width="281.333" height="306.667" version="1.0" viewBox="0 0 211 230"><path d="M117 1.5C97.9 5.6 79.2 17.9 68.2 33.7c-6.1 8.6 1.7 19.3 11 14.9 1.8-.9 4.3-3.1 5.5-4.9 6.4-9.4 18.8-18.2 30.8-22 9.7-3 24.3-3 34 .1 18.8 5.8 33.9 21 39.8 39.7 3 9.7 3 24.3 0 34-10.9 35.1-49.6 51.9-83 36-6.5-3.1-9.4-5.4-17.3-13.4-5.2-5.4-10.4-10.1-11.4-10.4-2.8-1.1-8.2 1-10 3.8-3.9 6-.6 12.7 12.2 24.6 30.7 28.7 78.6 27.5 108.5-2.7 29.5-29.8 30.2-77.2 1.7-107.7C170.7 5.1 143.2-4 117 1.5z"/><path d="M109.1 42.7c-1.7 1.6-3.1 3.7-3.2 4.8-.4 5.4.4 7 7.3 14.1l7.1 7.4H5.8l-2.9 2.9c-4 4.1-4 9.1 0 13.2L5.8 88h114.6l-6.6 6.7c-3.7 3.8-7.1 8-7.7 9.4-3.1 8.3 6.5 15.8 14.1 11.1 1.8-1.1 9.9-8.8 18.1-17 14.5-14.7 14.7-15 14.7-19.4 0-4.3-.1-4.5-17.3-21.6C120.6 42.2 118 40 115.2 40c-2.1 0-4.2 1-6.1 2.7zM39.8 199.9c-3.1 2.5-3.9 5.9-2.2 9.9 1 2.4 2.4 3.4 7.7 5.1 7.3 2.5 9.2 4 8.2 7-.8 2.7-4.3 3.5-11.1 2.7-4.9-.6-5.4-.4-5.4 1.4 0 2.6 4.8 3.7 13.8 3.2 4.5-.3 8.2-4.1 8.2-8.5 0-4-2.9-7.1-8-8.8-8.1-2.5-9-3.1-9-5.5 0-3.4 3.3-4.8 9.7-4.1 5.1.5 5.4.5 5.1-1.6-.3-2-1-2.2-7.4-2.5-5.8-.2-7.5.1-9.6 1.7zM64 213.5V229h5v-31h-5v15.5zM81.3 200c-9.3 5.6-8.8 24.1.8 28 3.6 1.5 14 1.5 16.9 0 1.7-.9 2-2 2-8.5V212h-6c-5.3 0-6 .2-6 2 0 1.7.7 2 4 2 4 0 4 0 4 3.9 0 4.3-1 5.1-6.5 5.1-7.5 0-10.5-3.5-10.5-12 0-3.7.6-5.6 2.4-7.7 2.3-2.6 3-2.8 9.5-2.7 6.1 0 7.1-.2 7.1-1.7 0-2.2-2-2.9-8.8-2.9-3.9 0-6.7.6-8.9 2zM106 213.5V229h2.5c2.4 0 2.4 0 2.7-11.3l.3-11.2 7.9 11.2c6.2 8.8 8.5 11.3 10.3 11.3h2.3v-31h-2.5c-2.4 0-2.4 0-2.7 11.1l-.3 11.2-7.9-11.2c-6.2-8.7-8.4-11.1-10.3-11.1H106v15.5zM149 213.4V229h6.1l-.3-15.3-.3-15.2-2.7-.3-2.8-.3v15.5zM160.7 198.6c-.4.4-.7 7.4-.7 15.6V229h6v-22.4l7.8 11.1c6.6 9.6 8.1 11.2 10.5 11.3h2.8l-.3-15.3-.3-15.2-2.7-.3-2.7-.3-.3 10.9-.3 11-7.5-10.6c-7.1-10-10.2-12.7-12.3-10.6z"/></svg>
       <div class="signin-form-cont">
          <div class="signin-form-box">
            <form class="form" id="form">
                           
              <div class="form-control">
                <label for="email">Email</label>
                <input type="text" id="email" placeholder="Email" autocomplete="off"/>
                <small>Error</small>
              </div>

              <div class="form-control">
                <label for="password">Password</label>
                <input type="password" id="password" placeholder="Password" autocomplete="off"/>
                <small>Error</small>
              </div>
              <small class="error-massage"></small>
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

    const validEmail = checkEmail(email);
    const validPassword = checkPassword(password);

    validEmail && validPassword
      ? ((body = {
          email: email.value,
          password: password.value,
        }),
        (created = await loginUser(body)),
        Cookies.set("username", created.username),
        Cookies.set("user_session", created.accessToken))
      : console.log("no validate");

    created.accessToken !== ""
      ? setTimeout(() => {
          (window.location.href = "#"), location.reload();
        }, 2000)
      : null;
  });
}
