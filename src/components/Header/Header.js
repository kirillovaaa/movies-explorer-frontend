import React, { useState } from "react";
import { Link, NavLink, useMatch } from "react-router-dom";
import SideNav from "../SideNav/SideNav";
import logo from "../../images/logo.svg";
import menuIcon from "../../images/menu.svg";
import "./Header.css";

const HeaderTab = ({ to, children, onClick }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "header__tab header__tab_active" : "header__tab"
      }
      onClick={onClick}
    >
      {children}
    </NavLink>
  );
};

const Header = ({ isLoggedIn }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const matchMain = useMatch("/");
  const matchMovies = useMatch("/movies");
  const matchSavedMovies = useMatch("/saved-movies");
  const matchProfile = useMatch("/profile");

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const matchRoutes =
    matchMain || matchMovies || matchSavedMovies || matchProfile;

  if (!matchRoutes) {
    return null;
  }

  return (
    <>
      <header className={matchMain ? "header header_blue" : "header"}>
        <nav className="header__nav">
          <Link to="/">
            <img src={logo} className="header__logo" alt="Логотип" />
          </Link>

          {isLoggedIn && (
            <div className="header__tabs">
              <HeaderTab to="/movies">Фильмы</HeaderTab>
              <HeaderTab to="/saved-movies">Сохраненные фильмы</HeaderTab>
            </div>
          )}

          <div className="header__right">
            {isLoggedIn ? (
              <>
                <Link to="/profile" className="header__profile-button">
                  Аккаунт
                </Link>

                <button
                  type="button"
                  className="header__menu-button"
                  onClick={openMenu}
                >
                  <img src={menuIcon} alt="Меню" />
                </button>
              </>
            ) : (
              <>
                <Link to="signup" className="header__auth-button">
                  Регистрация
                </Link>

                <Link
                  to="signin"
                  className="header__auth-button header__auth-button_primary"
                >
                  Войти
                </Link>
              </>
            )}
          </div>
        </nav>
      </header>

      <SideNav isMenuOpen={isMenuOpen} onCloseMenu={closeMenu} />
    </>
  );
};

export default Header;
