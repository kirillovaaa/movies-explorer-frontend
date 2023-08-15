import React from "react";
import "./Main.css";
// глобальные компоненты
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
// локальные компоненты
import Promo from "./Promo/Promo";
import NavTab from "./NavTab/NavTab";
import AboutProject from "./AboutProject/AboutProject";
import Techs from "./Techs/Techs";
import AboutMe from "./AboutMe/AboutMe";
import Portfolio from "./Portfolio/Portfolio";

const Main = () => {
  return (
    <main>
      <Header />
      <Promo />

      <NavTab />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />

      <Footer />
    </main>
  );
};

export default Main;
