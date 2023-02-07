import { SignInOnForm } from "../View/signinOn";

export function SignUp():void {
    const main = document.querySelector('main') as HTMLElement;
    main.innerHTML = "";
    main.innerHTML +=`<section class="signup-main-wrap">
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
            
            
            <button type="submit" class="form-button" id="form-button">   Sign Up</button>
        </form>
            <p class="signup-signin">Already have an account?<a class="p-link-signin">   Sign In</a></p>
          
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
   
    const eml =
      // eslint-disable-next-line no-useless-escape
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    const Validate = (
      item: HTMLElement,
      messageType: "success" | "error",
      message?: string
    ) => {
      const formControl = item.parentElement as HTMLDivElement;
      formControl.className =
        messageType === "error" ? "form-control error" : "form-control success";
      if (messageType === "error" && !!message) {
        const small = formControl.querySelector("small");
        (small as HTMLInputElement).innerHTML = message;
      }
    };
    function checkUser(username: HTMLInputElement) {
      if (
        username.value.toLowerCase().length >= 3 
         ) {
        Validate(username, "success");
      } else {
        Validate(username, "error", "Name length min 3 symbols");
      }
    }
   
    function checkEmail(email: HTMLInputElement) {
      if (eml.test(email.value.toLowerCase())) {
        Validate(email, "success");
      } else {
        Validate(email, "error", "Example: email@email.en");
      }
    }

    function checkPassword(password: HTMLInputElement) {
        if (
          password.value.toLowerCase().length >= 6
           ) {
          Validate(password, "success");
        } else {
          Validate(password, "error", "Password length min 6 symbols");
        }
      }

     const checkRequired = (items: HTMLInputElement[]) => {
      let count = 0;
      items.forEach((item: HTMLInputElement) => {
        if (item.value.trim() === "") {
          Validate(
            item,
            "error",
            captializedNameOFInput(item) + " is required"
          );
        } else {
          Validate(item, "success");
          count += 1;
          if (+count === 3) {

            /**-----------Aleksey form export to server---------*/
            setTimeout(() => console.log('Validate Ok'), 2000);
            /**-----------Aleksey form export to server---------*/
          }
        }
      });
    };

    const captializedNameOFInput = (item: HTMLInputElement) => {
      return item.id[0].toUpperCase() + item.id.slice(1);
    };

    form.addEventListener("submit", function (e: Event) {
      e.preventDefault();
      checkRequired([
        username,
        email,
        password,
      ]);
      checkUser(username);
      checkEmail(email);
      checkPassword(password);
     });
}
