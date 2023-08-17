import React from "react";
import "./NavTab.css";

const NavTab = () => {
  return (
    <section className="navTab">
      <div className="navTab__items">
        <span className="navTab__item">О проекте</span>
        <span className="navTab__item">Технологии</span>
        <span className="navTab__item">Студент</span>
      </div>
    </section>
  );
};
export default NavTab;
