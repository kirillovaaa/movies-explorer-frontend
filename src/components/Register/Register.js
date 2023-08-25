import React from "react";
import { Link } from "react-router-dom";
// все нужные нам стили уже есть в другом компоненте -> Signin
// здесь только перегрузка для маргина нижнего блока
import "./Register.css";
import Field from "../Field/Field";
import useForm from "../../utils/useForm";
import logo from "../../images/logo.svg";

const Register = ({ onSubmit }) => {
  const { values, handleChange } = useForm();

  const handleSubmit = (e) => {
    // отменяем стандартный переход на адрес формы
    e.preventDefault();
    // вызываем обработчик нажатия на кнопку "Войти"
    onSubmit({
      name: values.name,
      email: values.email,
      password: values.password,
    });
  };

  return (
    <main className="auth">
      <form className="auth__form" onSubmit={handleSubmit}>
        <section className="auth__top auth__top_signup">
          <div className="auth__header">
            <Link to="/">
              <img src={logo} className="auth__logo" alt="Логотип" />
            </Link>
            <h1 className="auth__title">Добро пожаловать!</h1>
          </div>

          <div className="auth__fields">
            <Field
              label="Имя"
              onChange={handleChange}
              type="text"
              autoComplete="name"
              name="name"
              minLength="2"
              maxLength="30"
              placeholder="Александра"
              required={true}
            />

            <Field
              label="E-mail"
              onChange={handleChange}
              type="email"
              autoComplete="email"
              placeholder="email@email.com"
              name="email"
              required={true}
            />

            <Field
              label="Пароль"
              onChange={handleChange}
              type="password"
              autoComplete="new-password"
              name="password"
              minLength="2"
              maxLength="30"
              placeholder="password"
              required={true}
            />
          </div>
        </section>

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
    </main>
  );
};

export default Register;
