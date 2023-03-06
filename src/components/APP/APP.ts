import "../View/view";
import "../Main/Main";
import "../Header/Header";
import "../Footer/Footer";

import { View } from "../View/view";
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import { Footer } from "../Footer/Footer";
import { Modal } from "../Modal/modal";

const App = () => {
  View();
  Header();
  Main();
  Footer();
  Modal();
};
App();
