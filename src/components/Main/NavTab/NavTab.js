import React from "react";
import "./NavTab.css";

const NavTab = () => {
  return (
    <section className="navTab">
      <ul className="navTab__items">
        <span className="navTab__item">О проекте</span>
        <span className="navTab__item">Технологии</span>
        <span className="navTab__item">Студент</span>
      </ul>
    </section>
  );
};
export default NavTab;
