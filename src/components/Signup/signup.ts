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
       <div class="signup-img"></div>
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
            <button type="submit" class="form-button" id="form-button">   Sign Up</button>
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
    checkUser(username) && checkEmail(email) && checkPassword(password)
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
