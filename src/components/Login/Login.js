import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import Field from "../Field/Field";
import { useForm } from "react-hook-form";
import logo from "../../images/logo.svg";
import textLabels from "../../constants/textLabels";
import fieldLabels from "../../constants/fieldLabels";

const Login = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    mode: "all",
    defaultValues: {
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
        <section className="auth__top">
          <div className="auth__header">
            <Link to="/">
              <img src={logo} className="auth__logo" alt="Логотип" />
            </Link>
            <h1 className="auth__title">{textLabels.auth.login.title}</h1>
          </div>

          <div className="auth__fields">
            <Field
              {...register("email", {
                onChange: handleChangeWithReset,
                required: {
                  value: !isSubmitting,
                  message: fieldLabels.validationMessages.required,
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
              autoComplete="current-password"
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
            {textLabels.auth.login.actions.signin}
          </button>

          <span className="auth__question">
            {textLabels.auth.login.question}{" "}
            <Link to="/signup" className="auth__secondary-link">
              {textLabels.auth.login.actions.signup}
            </Link>
          </span>
        </div>
      </form>
    </main>
  );
};

export default Login;
