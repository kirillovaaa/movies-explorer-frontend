import React, { useState, useMemo } from "react";
import { Link, NavLink, useMatch, useNavigate } from "react-router-dom";
import logo from "../../images/logo.svg";
import menuIcon from "../../images/menu.svg";
import crossIcon from "../../images/cross.svg";
import "./Header.css";

const HeaderLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `header__link ${isActive ? "header__link_active" : ""}`
      }
    >
      {children}
    </NavLink>
  );
};

const Header = ({ isLoggedIn }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();

  const matchMain = useMatch("/");
  const matchMovies = useMatch("/movies");
  const matchSavedMovies = useMatch("/saved-movies");
  const matchProfile = useMatch("/profile");

  const handleClickAccount = () => {
    navigate("/profile");
  };

  const handleOpenMenu = () => {
    setIsMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  const handleCaptureSidenav = (e) => {
    e.stopPropagation();
  };

  const showHeader =
    matchMain || matchMovies || matchSavedMovies || matchProfile;

  if (!showHeader) {
    return null;
  }

  return (
    <>
      <aside
        className={
          isMenuOpen
            ? "header__sidenav header__sidenav_active"
            : "header__sidenav"
        }
        onClick={handleCloseMenu}
      >
        <div className={"header__sidenav"}>
          <div
            className="header__links header__links_sidenav"
            onClick={handleCaptureSidenav}
          >
            <button className="header__icon-button" onClick={handleCloseMenu}>
              <img src={crossIcon} alt="Закрыть" />
            </button>
            <HeaderLink to="/">Главная</HeaderLink>
            <HeaderLink to="/movies">Фильмы</HeaderLink>
            <HeaderLink to="/saved-movies">Сохраненные фильмы</HeaderLink>
          </div>
        </div>
      </aside>

      <header className={`header ${matchMain ? "header_blue" : ""}`}>
        {/* впоследствии заменить на isLoggedIn */}
        <Link to="/">
          <img src={logo} className="header__logo" alt="movies-logo" />
        </Link>

        {/* впоследствии заменить на isLoggedIn */}
        {!matchMain && (
          <div className="header__links header__links_desktop">
            <HeaderLink to="/movies">Фильмы</HeaderLink>
            <HeaderLink to="/saved-movies">Сохраненные фильмы</HeaderLink>
          </div>
        )}

        <div className="header__actions">
          {!matchMain ? (
            <>
              <button
                className="header__button header__button_pill header__button_desktop"
                onClick={handleClickAccount}
              >
                Аккаунт
              </button>

              <button
                className="header__icon-button header__icon-button_mobile"
                src={menuIcon}
                onClick={handleOpenMenu}
              >
                <img src={menuIcon} alt="Меню" />
              </button>
            </>
          ) : (
            <div className="header__auth">
              <Link to="signup" className="header__button header__button_auth">
                Регистрация
              </Link>

              <Link
                to="signin"
                className="header__button header__button_primary header__button_auth"
              >
                Войти
              </Link>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
