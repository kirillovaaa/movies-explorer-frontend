import React, { useState } from "react";
import { Link, NavLink, useMatch, useNavigate } from "react-router-dom";
import logo from "../../images/logo.svg";
import menuIcon from "../../images/menu.svg";
import crossIcon from "../../images/cross.svg";
import "./Header.css";

const HeaderLink = ({ to, children, onClick }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `header__link ${isActive ? "header__link_active" : ""}`
      }
      onClick={onClick}
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
    closeMenu();
  };

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
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
                type="button"
                className="header__button header__button_pill header__button_desktop"
                onClick={handleClickAccount}
              >
                Аккаунт
              </button>

              <button
                type="button"
                className="header__icon-button header__icon-button_mobile"
                src={menuIcon}
                onClick={openMenu}
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

      <div
        className="header__sidenav"
        style={{ visibility: isMenuOpen ? "visible" : "hidden" }}
        onClick={closeMenu}
      >
        <div className="header__sidenav-main">
          <div
            className="header__links header__links_sidenav"
            onClick={handleCaptureSidenav}
          >
            <button
              type="button"
              className="header__icon-button"
              onClick={closeMenu}
            >
              <img src={crossIcon} alt="Закрыть" />
            </button>

            <HeaderLink to="/" onClick={closeMenu}>
              Главная
            </HeaderLink>

            <HeaderLink to="/movies" onClick={closeMenu}>
              Фильмы
            </HeaderLink>

            <HeaderLink to="/saved-movies" onClick={closeMenu}>
              Сохраненные фильмы
            </HeaderLink>

            <button
              type="button"
              className="header__button header__button_pill"
              onClick={handleClickAccount}
            >
              Аккаунт
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
