import { SignIn } from "../Signin/signin";

export function SignInOn() {
  const about = document.querySelector(".signin") as HTMLElement;
  about.addEventListener("click", () => {
    SignIn();
  });
}
export function SignInOnForm() {
  const about = document.querySelector(".p-link-signin") as HTMLElement;
  about.addEventListener("click", () => {
    SignIn();
  });
}
