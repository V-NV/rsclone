export const eml =
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const Validate = (
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

export function checkEmail(email: HTMLInputElement) {
  const emailDomains = [
    "@gmail.com",
    "@yahoo.com",
    "@hotmail.com",
    "@yandex.ru",
    "@mail.ru",
  ];
  const domain = email.value.slice(email.value.indexOf("@"));
  const validEmail = emailDomains.includes(domain);
  if (!validEmail) {
    Validate(email, "error", "Invalided email domain");
    return false;
  }

  if (eml.test(email.value.toLowerCase()) && validEmail) {
    Validate(email, "success");
    return true;
  } else {
    Validate(email, "error", "Example: email@email.en");
    return false;
  }
}

export function checkPassword(password: HTMLInputElement) {
  if (password.value.toLowerCase().length >= 6) {
    Validate(password, "success");
    return true;
  } else {
    Validate(password, "error", "Password length min 6 symbols");
    return false;
  }
}

export const checkRequired = (items: HTMLInputElement[]) => {
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
export function checkUser(username: HTMLInputElement) {
  if (username.value.toLowerCase().length >= 3) {
    Validate(username, "success");
    return true;
  } else {
    Validate(username, "error", "Name length min 3 symbols");
    return false;
  }
}

export function checkValidateForm(
  html: HTMLInputElement,
  len: number,
  message: string
) {
  if (html.value.toLowerCase().length >= len) {
    Validate(html, "success");
    return true;
  } else {
    Validate(html, "error", message);
    return false;
  }
}
