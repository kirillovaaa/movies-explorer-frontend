import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import Field from "../Field/Field";
import logo from "../../images/logo.svg";

const Login = ({ onSubmit }) => {
  const [email, setEmail] = useState("pochta@yandex.ru");
  const [password, setPassword] = useState("");

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    // отменяем стандартный переход на адрес формы
    e.preventDefault();
    // вызываем обработчик нажатия на кнопку "Войти"
    onSubmit({ email, password });
  };

  return (
    <main className="auth">
      <form className="auth__form" onSubmit={handleSubmit}>
        <section className="auth__top">
          <div className="auth__header">
            <Link to="/">
              <img src={logo} className="auth__logo" alt="Логотип" />
            </Link>
            <h1 className="auth__title">Рады видеть!</h1>
          </div>

          <div className="auth__fields">
            <Field
              value={email}
              onChange={handleChangeEmail}
              label="E-mail"
              name="email"
              type="email"
              minLength={8}
              placeholder="email@email.com"
              autoComplete="email"
              required={true}
            />

            <Field
              value={password}
              onChange={handleChangePassword}
              label="Пароль"
              name="password"
              type="password"
              minLength={8}
              maxLength={16}
              placeholder="password"
              autoComplete="current-password"
              required={true}
            />
          </div>
        </section>

        <div className="auth__footer">
          <button type="submit" className="auth__button">
            Войти
          </button>

          <span className="auth__question">
            Ещё не зарегистрированы?{" "}
            <Link to="/signup" className="auth__secondary-link">
              Регистрация
            </Link>
          </span>
        </div>
      </form>
    </main>
  );
};

export default Login;
