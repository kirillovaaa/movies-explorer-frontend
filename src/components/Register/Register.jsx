import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./Register.css";

const Register = ({ onSubmit }) => {
  const email = useRef();
  const password = useRef();

  const handleSubmit = (e) => {
    e.preventDefault(); // отменяем стандартный переход на адрес формы
    onSubmit({
      email: email.current.value,
      password: password.current.value,
    });
  };

  return (
    <>
      <form className="signup" onSubmit={handleSubmit}>
        <div className="signup__registration">
          <h1 className="signup__heading">Добро пожаловать!</h1>

          <div className="signup__input-wrapper">
            <input
              ref={email}
              className="signup__input"
              type="email"
              autoComplete="email"
              name="email"
              placeholder="Email"
              required={true}
            />
          </div>

          <div className="signup__input-wrapper">
            <input
              ref={password}
              className="signup__input"
              type="password"
              autoComplete="new-password"
              name="password"
              placeholder="Пароль"
              minLength="2"
              maxLength="30"
              required={true}
            />
          </div>
        </div>

        <div className="signup__footer">
          <button className="signup__registration-button" type="submit">
            Зарегистрироваться
          </button>
          <p className="signup__text">Уже зарегистрированы?</p>
          <Link to="/sign-in" className="signup__login-button" type="button">
            Войти
          </Link>
        </div>
      </form>
    </>
  );
};

export default Register;
