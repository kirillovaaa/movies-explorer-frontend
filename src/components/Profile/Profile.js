import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import "./Profile.css";

const Profile = ({ onSubmit, onLogout }) => {
  const currentUser = useContext(CurrentUserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
    defaultValues: {
      name: currentUser.name,
      email: currentUser.email,
    },
  });

  const navigate = useNavigate();

  const handleClickLogout = () => {
    navigate("/signin");
    onLogout();
  };

  return (
    <main className="profile">
      <form
        className="profile__form"
        onSubmit={handleSubmit((data) => {
          onSubmit(data);
        })}
      >
        <section className="profile__top">
          <h1 className="profile__welcome">Привет, {currentUser.name}!</h1>

          <div className="profile__container">
            <div className="profile__field">
              <span>Имя</span>
              <input
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
          {errors.name && <span>Имя: {errors.name.message}</span>}
          {errors.email && <span>Email: {errors.email.message}</span>}

          <button type="submit" className="profile__button">
            Редактировать
          </button>

          <button
            type="button"
            className="profile__button profile__button_destructive"
            onClick={handleClickLogout}
          >
            Выйти из аккаунта
          </button>
        </div>
      </form>
    </main>
  );
};

export default Profile;
