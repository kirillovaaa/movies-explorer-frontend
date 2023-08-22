import React from "react";
import "./Profile.css";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  const handleClickLogout = () => {
    navigate("/signin");
  };

  return (
    <main className="profile">
      <form className="profile__form">
        <section className="profile__top">
          <h1 className="profile__welcome">Привет, Александра!</h1>

          <div className="profile__container">
            <div className="profile__field">
              <span>Имя</span>
              <span>Александра</span>
            </div>

            <div className="profile__field-divider"></div>

            <div className="profile__field">
              <span>E-mail</span>
              <span>kiri2lova@gmail.com</span>
            </div>
          </div>
        </section>

        <section className="profile__buttons">
          <button type="button" className="profile__button">
            Редактировать
          </button>

          <button
            type="button"
            className="profile__button profile__button_destructive"
            onClick={handleClickLogout}
          >
            Выйти из аккаунта
          </button>
        </section>
      </form>
    </main>
  );
};

export default Profile;
