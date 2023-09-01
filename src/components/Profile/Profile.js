import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import "./Profile.css";

const Profile = ({ onSubmit, onLogout }) => {
  const [isSuccess, setIsSuccess] = useState(false);

  const currentUser = useContext(CurrentUserContext);

  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    getValues,
    formState: { errors },
  } = useForm({
    mode: "all",
    defaultValues: {
      name: currentUser.name,
      email: currentUser.email,
    },
  });

  useEffect(() => {
    checkValidity();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);

  const checkValidity = () => {
    const { name, email } = getValues();
    if (name === currentUser.name && email === currentUser.email) {
      setError("root", { message: "Форма не заполнена" });
    } else {
      clearErrors("root");
    }
  };

  const handleChangeWithReset = (e) => {
    if (isSuccess) {
      setIsSuccess(false);
    }
    if (errors.response) {
      clearErrors("response");
    }
    checkValidity();
    return e.target.value;
  };

  return (
    <main className="profile">
      <form
        className="profile__form"
        onSubmit={handleSubmit(async (data) => {
          try {
            await onSubmit(data);
            setIsSuccess(true);
          } catch (e) {
            setError("response", {
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
          <div className="profile__messages-wrapper">
            {isSuccess && (
              <span className="profile__message">Данные успешно обновлены</span>
            )}
            {errors.name?.message && (
              <span className="profile__message profile__message_error">
                Имя: {errors.name.message}
              </span>
            )}
            {errors.email?.message && (
              <span className="profile__message profile__message_error">
                Email: {errors.email.message}
              </span>
            )}
            {errors.response?.message && (
              <span className="profile__message profile__message_error">
                {errors.response.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="profile__button"
            disabled={
              errors.email || errors.name || errors.root || errors.response
            }
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
