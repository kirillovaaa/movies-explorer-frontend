import React from "react";
import "./NavTab.css";
import ScrollInto from "react-scroll-into-view";

const NavTab = () => {
  return (
    <section className="nav-tab">
      <ul className="nav-tab__items">
        <ScrollInto selector="#about-project">
          <span className="nav-tab__item">О проекте</span>
        </ScrollInto>

        <ScrollInto selector="#techs">
          <span className="nav-tab__item">Технологии</span>
        </ScrollInto>

        <ScrollInto selector="#about-me">
          <span className="nav-tab__item">Студент</span>
        </ScrollInto>
      </ul>
    </section>
  );
};
export default NavTab;
