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
      <div className="profile__form">
        <div className="profile__top">
          <h2 className="profile__welcome">Привет, Александра!</h2>

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
        </div>

        <div className="profile__buttons">
          <button className="profile__button">Редактировать</button>

          <button
            className="profile__button profile__button_destructive"
            onClick={handleClickLogout}
          >
            Выйти из аккаунта
          </button>
        </div>
      </div>
    </main>
  );
};

export default Profile;
