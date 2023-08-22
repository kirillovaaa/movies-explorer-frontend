import React from "react";
import { Link, NavLink } from "react-router-dom";
import crossIcon from "../../images/cross.svg";
import "./SideNav.css";

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
          <SideNavLink to="/" onClick={onCloseMenu}>
            Главная
          </SideNavLink>

          <SideNavLink to="/movies" onClick={onCloseMenu}>
            Фильмы
          </SideNavLink>

          <SideNavLink to="/saved-movies" onClick={onCloseMenu}>
            Сохраненные фильмы
          </SideNavLink>
        </div>

        <Link to="/profile" className="sidenav__profile-button">
          Аккаунт
        </Link>
      </div>
    </aside>
  );
};

export default SideNav;
