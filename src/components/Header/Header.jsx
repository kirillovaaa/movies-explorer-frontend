import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import "./Header.css";
import logo from "../../images/logo.svg";

const Header = ({ onLogout }) => {
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} className="header__logo" alt="movies-logo" />
      </Link>
      <div className="header__user-info">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <button className="header__account" onClick={onLogout}>
                  Аккаунт
                </button>
              </>
            }
          />
          {/* 
          <Route
            path="/sign-in"
            element={
              <Link to={"/sign-up"} className="header__button">
                Регистрация
              </Link>
            }
          />

          <Route
            path="/sign-up"
            element={
              <Link to={"/sign-in"} className="header__button">
                Войти
              </Link>
            }
          /> */}
        </Routes>
      </div>
    </header>
  );
};

export default Header;
