import React from "react";
import ScrollInto from "react-scroll-into-view";
import "./NavTab.css";
import textLabels from "../../../constants/textLabels";

const NavTab = () => {
  return (
    <div className="nav-tab">
      <ul className="nav-tab__items">
        {textLabels.main.navTab.map((tab) => (
          <li key={tab.selector} className="nav-tab__item">
            <ScrollInto selector={tab.selector} className="nav-tab__item-link">
              {tab.label}
            </ScrollInto>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default NavTab;
