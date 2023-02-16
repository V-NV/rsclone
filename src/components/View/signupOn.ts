import { SignUp } from "../Signup/signup";

export function SignUpOn() {
  const about = document.querySelector(".signup") as HTMLElement;
  about.addEventListener("click", () => {
    SignUp();
  });
}
