import { IRegisterData } from "../../types/api.interface";
import { registerUser } from "../Api/register-login.api";
import {
  checkRequired,
  checkUser,
  checkEmail,
  checkPassword,
} from "../Service/auth.login.service";
import { SignInOnForm } from "../View/signinOn";

export function SignUp(): void {
  const main = document.querySelector("main") as HTMLElement;
  main.innerHTML = "";
  main.innerHTML += `<section class="signup-main-wrap">
    <div class="signup-main-cont">
      <svg xmlns="http://www.w3.org/2000/svg" width="226.667" height="286.667" version="1.0" viewBox="0 0 170 215"><path d="M71.2 1.1c-12 2-24.6 12-29.9 23.6-3.4 7.5-4.2 18.6-1.9 26.5 2.3 7.9 8.7 17.1 15.4 21.8 13.9 10 33.1 9.8 47-.4C115.9 62.2 121.4 45 116 27.9c-5.7-18.2-25.5-30-44.8-26.8zM143 41v7.9l-7.7.3-7.8.3-.3 4.2-.3 4.3H143v17h8.9l.3-8.3.3-8.2 7.8-.3 7.7-.3V49h-16V33h-9v8z"/><path d="M30.7 75.4C20.8 79 12.9 88.2 9 100.7c-3 9.7-3.4 15-1.6 22.6 1.9 8.3 3.7 11.1 9 14.2 7.3 4.2 13.7 4.6 66.1 4.3 44.4-.3 49.4-.5 52.9-2.1 7.8-3.5 10.4-6.3 12.6-13.3 2.4-7.8 2.5-12.7.5-21.2-4.2-17.8-14.8-29.3-28.4-30.9-4.4-.5-5.4-.2-13.9 5-11.6 7-19.3 9.1-30.4 8.5-10.1-.6-17.5-3.1-27-9.2-7.8-5-11.3-5.6-18.1-3.2zM3.4 185.3c-2.1 1.9-2.8 3.3-2.8 6.2 0 4.6 2.3 6.8 9.9 9 5.6 1.6 8 4 6.9 6.9-.9 2.2-4.6 3-11 2.2-4.9-.6-5.4-.4-5.4 1.3 0 2.5 2.9 3.4 10.1 3.4 7.1-.1 10.6-2.2 11.5-7 1-5.2-1.8-8.3-9.7-10.9-5.5-1.8-6.4-2.4-6.7-4.7-.5-3.7 2.7-5.1 9.5-4.3 5.2.6 5.4.5 5.1-1.6-.3-2.1-.9-2.3-7.4-2.6-6.4-.3-7.5 0-10 2.1zM28 198.5V214h5v-31h-5v15.5zM46.5 184c-10.1 4.1-11 23.6-1.3 28.6 3.5 1.8 12.9 2.1 17.1.5 2.6-1 2.7-1.3 2.7-8.6V197h-6c-5.3 0-6 .2-6 2 0 1.6.7 2 3.6 2h3.5l-.3 4.2-.3 4.3h-5.9c-7.7-.1-9.6-2.2-9.6-10.7 0-5.3.3-6.3 3.1-9 2.9-3 3.3-3.1 9.5-2.5 5.8.6 6.4.4 6.4-1.2 0-1.1-.7-2.2-1.6-2.5-2.2-.9-12.5-.6-14.9.4zM70 198.5V214h2.5c2.4 0 2.4 0 2.7-11.1l.3-11.2 7.9 11.2c6.2 8.7 8.4 11.1 10.3 11.1H96v-31h-2.5c-2.4 0-2.4 0-2.7 11.2l-.3 11.3-8-11.3c-6.1-8.7-8.4-11.2-10.2-11.2-2.3 0-2.3 0-2.3 15.5zM113 194.5c0 13.2 1.1 16.5 6.1 18.5 4.2 1.8 12.5 1.5 15.6-.5 4-2.7 5.3-7.3 5.3-19V183h-6v11.9c0 11.3-.1 12.1-2.2 13.5-3.4 2.4-8.5 2-11.3-.9-2.4-2.3-2.5-3.1-2.5-13.5v-11h-5v11.5zM145 198.5V214h3c2.9 0 3-.1 3-5v-5h4.5c6.7 0 11.3-2.3 13-6.4 2-4.6 1-9-2.7-12.1-2.7-2.3-3.8-2.5-11.9-2.5H145v15.5zm17.2-9.8c2 1.8 2.4 7.3.6 9.1-.7.7-3.6 1.2-6.5 1.2H151v-12h4.7c2.9 0 5.3.6 6.5 1.7z"/></svg>
        <div class="signup-form-cont">
          <div class="signup-form-box">
            <form class="form" id="form">
             
              <div class="form-control">
                <label for="username"> Your name</label>
                <input type="text" id="username" placeholder="Enter name" autocomplete="off"/>
                <small>Error</small>
              </div>
            
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
              <small class="error-massage"></small>
            <button type="submit" class="form-button" id="form-button">Sign Up</button>
        </form>
            <p class="signup-signin">Already have an account? <a href="#signin" class="p-link-signin">   Sign In</a></p>
          
          </div>
       </div>
    </div>
</section>`;
  FormSignUp();
  SignInOnForm();
}

function FormSignUp(): void {
  const form = document.getElementById("form") as HTMLFormElement;
  const username = document.getElementById("username") as HTMLInputElement;
  const email = document.getElementById("email") as HTMLInputElement;
  const password = document.getElementById("password") as HTMLInputElement;

  form.addEventListener("submit", async function (e: Event) {
    let body: IRegisterData = { name: "", email: "", password: "" };
    let created = false;
    e.preventDefault();
    checkRequired([username, email, password]);

    const validUser = checkUser(username);
    const validEmail = checkEmail(email);
    const validPassword = checkPassword(password);

    validUser && validEmail && validPassword
      ? ((body = {
          name: username.value,
          email: email.value,
          password: password.value,
        }),
        (created = await registerUser(body)))
      : console.log("no validate");

    created
      ? setTimeout(() => {
          (window.location.href = "#"), location.reload();
        }, 2000)
      : null;
  });
}
