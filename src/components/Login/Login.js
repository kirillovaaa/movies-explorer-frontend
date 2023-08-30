import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import Field from "../Field/Field";
import { useForm } from "react-hook-form";
import logo from "../../images/logo.svg";

const Login = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    mode: "all",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <main className="auth">
      <form
        className="auth__form"
        onSubmit={handleSubmit((data) => {
          onSubmit(data).catch((e) => {
            if (e.message.includes("email")) {
              setError("email", { message: e.message });
            } else {
              setError("password", { message: e.message });
            }
          });
        })}
      >
        <section className="auth__top">
          <div className="auth__header">
            <Link to="/">
              <img src={logo} className="auth__logo" alt="Логотип" />
            </Link>
            <h1 className="auth__title">Рады видеть!</h1>
          </div>

          <div className="auth__fields">
            <Field
              {...register("email", {
                required: {
                  value: true,
                  message: "Обязательное поле",
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Укажите валидный e-mail адрес",
                },
              })}
              label="E-mail"
              placeholder="email@email.com"
              autoComplete="email"
              errorMessage={errors.email?.message}
            />

            <Field
              {...register("password", {
                required: {
                  value: true,
                  message: "Обязательное поле",
                },
                minLength: {
                  value: 8,
                  message: "Минимальная длина 8 символов",
                },
                maxLength: {
                  value: 16,
                  message: "Максимальная длина 16 символов",
                },
              })}
              label="Пароль"
              type="password"
              placeholder="password"
              autoComplete="current-password"
              errorMessage={errors.password?.message}
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
