import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
// все нужные нам стили уже есть в другом компоненте -> Signin
// здесь только перегрузка для маргина нижнего блока
import "./Register.css";
import Field from "../Field/Field";
import logo from "../../images/logo.svg";

const Register = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    mode: "all",
    defaultValues: {
      name: "",
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
        <section className="auth__top auth__top_signup">
          <div className="auth__header">
            <Link to="/">
              <img src={logo} className="auth__logo" alt="Логотип" />
            </Link>
            <h1 className="auth__title">Добро пожаловать!</h1>
          </div>

          <div className="auth__fields">
            <Field
              {...register("name", {
                required: {
                  value: true,
                  message: "Обязательное поле",
                },
                minLength: {
                  value: 2,
                  message: "Минимальная длина 2 символа",
                },
                maxLength: {
                  value: 30,
                  message: "Минимальная длина 30 символов",
                },
              })}
              label="Имя"
              type="text"
              autoComplete="name"
              placeholder="Имя"
              errorMessage={errors.name?.message}
            />

            <Field
              {...register("email", {
                required: {
                  value: true,
                  message: "Обязательное поле",
                },
                minLength: {
                  value: 8,
                  message: "Минимальная длина 8 символов",
                },
                maxLength: {
                  value: 30,
                  message: "Максимальная длина 30 символов",
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Укажите валидный e-mail адрес",
                },
              })}
              label="E-mail"
              autoComplete="email"
              placeholder="email@email.com"
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
              autoComplete="new-password"
              placeholder="password"
              errorMessage={errors.password?.message}
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
