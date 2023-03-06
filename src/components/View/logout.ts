import Cookies from "js-cookie";

export const getLogout = () => {
  const logout = document?.querySelector(".logout");
  logout?.addEventListener("click", () => {
    Cookies.remove("user_session");
    Cookies.remove("username");
    setTimeout(() => location.reload(), 1000);
  });
};
