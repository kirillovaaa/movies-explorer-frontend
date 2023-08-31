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
    setError,
    clearErrors,
    formState: { errors, isValid },
  } = useForm({
    mode: "all",
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const handleChangeWithReset = (e) => {
    if (errors.root) {
      clearErrors("root");
    }
    return e.target.value;
  };

  return (
    <main className="auth">
      <form
        className="auth__form"
        onSubmit={handleSubmit(async (data) => {
          try {
            await onSubmit(data);
          } catch (e) {
            setError("root", { message: e.message });
          }
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
                onChange: handleChangeWithReset,
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
                onChange: handleChangeWithReset,
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
                onChange: handleChangeWithReset,
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
          {errors.root && (
            <span className="auth__error">{errors.root.message}</span>
          )}

          <button type="submit" className="auth__button" disabled={!isValid}>
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
