import React, { useState } from "react";
import { Link } from "react-router-dom";
// все нужные нам стили уже есть в другом компоненте -> Signin
// здесь только перегрузка для маргина нижнего блока
import "./Register.css";
import logo from "../../images/logo.svg";
import Field from "../Field/Field";

const Register = ({ onSubmit }) => {
  const [name, setName] = useState("Александра");
  const [email, setEmail] = useState("pochta@yandex.ru");
  const [password, setPassword] = useState("••••••••••••••");

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

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
    <section className="auth">
      <form className="auth__form" onSubmit={handleSubmit}>
        <div className="auth__top auth__top_signup">
          <div className="auth__header">
            <Link to="/">
              <img src={logo} className="auth__logo" alt="Логотип" />
            </Link>
            <h1 className="auth__title">Добро пожаловать!</h1>
          </div>

          <div className="auth__fields">
            <Field
              label="Имя"
              value={name}
              onChange={handleChangeName}
              type="name"
              autoComplete="name"
              name="name"
              minLength="2"
              maxLength="30"
              placeholder="Александра"
              required={true}
            />

            <Field
              label="E-mail"
              value={email}
              onChange={handleChangeEmail}
              type="email"
              autoComplete="email"
              placeholder="email@email.com"
              name="email"
              required={true}
            />

            <Field
              label="Пароль"
              value={password}
              onChange={handleChangePassword}
              type="password"
              autoComplete="new-password"
              name="password"
              minLength="2"
              maxLength="30"
              placeholder="password"
              errorMessage="Что-то пошло не так..."
              required={true}
            />
          </div>
        </div>

        <div className="auth__footer">
          <button type="submit" className="auth__button">
            Зарегистрироваться
          </button>

          <span className="auth__question">
            Уже зарегистрированы?{" "}
            <Link to="/signin" className="auth__secondary-link">
              Войти
            </Link>
          </span>
        </div>
      </form>
    </section>
  );
};

export default Register;
