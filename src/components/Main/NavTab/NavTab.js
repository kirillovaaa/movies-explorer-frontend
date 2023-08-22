import React from "react";
import ScrollInto from "react-scroll-into-view";
import "./NavTab.css";

const NavTab = () => {
  return (
    <div className="nav-tab">
      <ul className="nav-tab__items">
        <li className="nav-tab__item">
          <ScrollInto selector="#about-project" className="nav-tab__item-link">
            О проекте
          </ScrollInto>
        </li>

        <li className="nav-tab__item">
          <ScrollInto selector="#techs" className="nav-tab__item-link">
            Технологии
          </ScrollInto>
        </li>

        <li className="nav-tab__item">
          <ScrollInto selector="#about-me" className="nav-tab__item-link">
            Студент
          </ScrollInto>
        </li>
      </ul>
    </div>
  );
};
export default NavTab;
