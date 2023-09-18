import React from "react";
import { Link, NavLink } from "react-router-dom";
import crossIcon from "../../images/cross.svg";
import "./SideNav.css";
import textLabels from "../../constants/textLabels";

const SideNavLink = ({ to, children, onClick }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "sidenav__tab sidenav__tab_active" : "sidenav__tab"
      }
      onClick={onClick}
    >
      {children}
    </NavLink>
  );
};

const SideNav = ({ isMenuOpen, onCloseMenu }) => {
  const handleCaptureSidenav = (e) => {
    e.stopPropagation();
  };

  return (
    <aside
      className="sidenav"
      style={{ visibility: isMenuOpen ? "visible" : "hidden" }}
      onClick={onCloseMenu}
    >
      <div className="sidenav__main">
        <button
          type="button"
          className="sidenav__close-button"
          onClick={onCloseMenu}
        >
          <img src={crossIcon} alt="Закрыть" />
        </button>

        <div className="sidenav__tabs" onClick={handleCaptureSidenav}>
          {textLabels.sideNav.tabs.map((t) => (
            <SideNavLink key={t.link} to={t.link} onClick={onCloseMenu}>
              {t.label}
            </SideNavLink>
          ))}
        </div>

        <Link to="/profile" className="sidenav__profile-button">
          {textLabels.sideNav.links.account}
        </Link>
      </div>
    </aside>
  );
};

export default SideNav;
