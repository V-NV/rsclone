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
            <p class="signin-signup">Forgot<a class="p-link-signin">   Password?</a></p>
          
          </div>
       </div>
    </div>
</section>;`;
  FormSignIn();
}

function FormSignIn(): void {
  const form = document.getElementById("form") as HTMLFormElement;
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

  function checkEmail(email: HTMLInputElement) {
    if (eml.test(email.value.toLowerCase())) {
      Validate(email, "success");
    } else {
      Validate(email, "error", "Example: email@email.en");
    }
  }

  function checkPassword(password: HTMLInputElement) {
    if (password.value.toLowerCase().length >= 6) {
      Validate(password, "success");
    } else {
      Validate(password, "error", "Password length min 6 symbols");
    }
  }

  const checkRequired = (items: HTMLInputElement[]) => {
    let count = 0;
    items.forEach((item: HTMLInputElement) => {
      if (item.value.trim() === "") {
        Validate(item, "error", captializedNameOFInput(item) + " is required");
      } else {
        Validate(item, "success");
        count += 1;
        if (+count === 2) {
          /**-----------Aleksey form export to server---------*/
          setTimeout(() => console.log("Validate Ok"), 2000);
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
    checkRequired([email, password]);
    checkEmail(email);
    checkPassword(password);
  });
}
