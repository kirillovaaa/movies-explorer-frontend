import React from "react";
import "./NavTab.css";
import ScrollInto from "react-scroll-into-view";

const NavTab = () => {
  return (
    <section className="navTab">
      <ul className="navTab__items">
        <ScrollInto selector="#about-project">
          <span className="navTab__item">О проекте</span>
        </ScrollInto>

        <ScrollInto selector="#techs">
          <span className="navTab__item">Технологии</span>
        </ScrollInto>

        <ScrollInto selector="#about-me">
          <span className="navTab__item">Студент</span>
        </ScrollInto>
      </ul>
    </section>
  );
};
export default NavTab;
