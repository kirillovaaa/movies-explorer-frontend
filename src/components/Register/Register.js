import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
// все нужные нам стили уже есть в другом компоненте -> Signin
// здесь только перегрузка для маргина нижнего блока
import "./Register.css";
import Field from "../Field/Field";
import logo from "../../images/logo.svg";
import fieldLabels from "../../constants/fieldLabels";
import textLabels from "../../constants/textLabels";

const Register = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors, isValid, isSubmitting },
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
          document.activeElement.blur();
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
            <h1 className="auth__title">{textLabels.auth.register.title}</h1>
          </div>

          <div className="auth__fields">
            <Field
              {...register("name", {
                onChange: handleChangeWithReset,
                required: {
                  value: !isSubmitting,
                  message: fieldLabels.validationMessages.required,
                },
                minLength: {
                  value: 2,
                  message: fieldLabels.validationMessages.minLength(2),
                },
                maxLength: {
                  value: 30,
                  message: fieldLabels.validationMessages.maxLength(30),
                },
              })}
              label={fieldLabels.name.label}
              placeholder={fieldLabels.name.placeholder}
              type="text"
              autoComplete="name"
              disabled={isSubmitting}
              errorMessage={errors.name?.message}
            />

            <Field
              {...register("email", {
                onChange: handleChangeWithReset,
                required: {
                  value: !isSubmitting,
                  message: fieldLabels.validationMessages.required,
                },
                minLength: {
                  value: 8,
                  message: fieldLabels.validationMessages.minLength(8),
                },
                maxLength: {
                  value: 30,
                  message: fieldLabels.validationMessages.maxLength(30),
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: fieldLabels.validationMessages.email,
                },
              })}
              label={fieldLabels.email.label}
              placeholder={fieldLabels.email.placeholder}
              autoComplete="email"
              disabled={isSubmitting}
              errorMessage={errors.email?.message}
            />

            <Field
              {...register("password", {
                onChange: handleChangeWithReset,
                required: {
                  value: !isSubmitting,
                  message: fieldLabels.validationMessages.required,
                },
                minLength: {
                  value: 8,
                  message: fieldLabels.validationMessages.minLength(8),
                },
                maxLength: {
                  value: 16,
                  message: fieldLabels.validationMessages.maxLength(16),
                },
              })}
              label={fieldLabels.password.label}
              placeholder={fieldLabels.password.placeholder}
              type="password"
              autoComplete="new-password"
              disabled={isSubmitting}
              errorMessage={errors.password?.message}
            />
          </div>
        </section>

        <div className="auth__footer">
          {errors.root && (
            <span className="auth__error">{errors.root.message}</span>
          )}

          <button
            type="submit"
            className="auth__button"
            disabled={!isValid || isSubmitting}
          >
            {textLabels.auth.register.actions.signup}
          </button>

          <span className="auth__question">
            {textLabels.auth.register.question}{" "}
            <Link to="/signin" className="auth__secondary-link">
              {textLabels.auth.register.actions.signin}
            </Link>
          </span>
        </div>
      </form>
    </main>
  );
};

export default Register;
