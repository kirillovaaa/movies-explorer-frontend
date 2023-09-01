import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import "./Profile.css";

const Profile = ({ onSubmit, onLogout }) => {
  const currentUser = useContext(CurrentUserContext);

  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm({
    mode: "all",
    defaultValues: {
      name: currentUser.name,
      email: currentUser.email,
    },
  });

  const handleChangeWithReset = (e) => {
    if (errors.root) {
      clearErrors("root");
    }
    return e.target.value;
  };

  return (
    <main className="profile">
      <form
        className="profile__form"
        onSubmit={handleSubmit(async (data) => {
          try {
            await onSubmit(data);
          } catch (e) {
            setError("root", {
              message: "При обновлении профиля произошла ошибка",
            });
          }
        })}
      >
        <section className="profile__top">
          <h1 className="profile__welcome">Привет, {currentUser.name}!</h1>

          <div className="profile__container">
            <div className="profile__field">
              <span>Имя</span>
              <input
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
                className="profile__field-input"
                type="text"
                autoComplete="name"
                placeholder="Имя"
              />
            </div>

            <div className="profile__field-divider"></div>

            <div className="profile__field">
              <span>E-mail</span>
              <input
                {...register("email", {
                  onChange: handleChangeWithReset,
                  required: {
                    value: true,
                    message: "Обязательное поле",
                  },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Укажите валидный e-mail адрес",
                  },
                })}
                className="profile__field-input"
                type="text"
                autoComplete="email"
                placeholder="email@email.com"
              />
            </div>
          </div>
        </section>

        <div className="profile__buttons">
          {(errors.name || errors.email || errors.root) && (
            <div className="profile__errors-wrapper">
              {errors.name && (
                <span className="profile__error">
                  Имя: {errors.name.message}
                </span>
              )}
              {errors.email && (
                <span className="profile__error">
                  Email: {errors.email.message}
                </span>
              )}
              {errors.root && (
                <span className="profile__error">{errors.root.message}</span>
              )}
            </div>
          )}

          <button
            type="submit"
            className="profile__button"
            disabled={!!errors.name || !!errors.email}
          >
            Редактировать
          </button>

          <button
            type="button"
            className="profile__button profile__button_destructive"
            onClick={onLogout}
          >
            Выйти из аккаунта
          </button>
        </div>
      </form>
    </main>
  );
};

export default Profile;
