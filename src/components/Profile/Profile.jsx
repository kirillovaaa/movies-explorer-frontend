import React from "react";
import "./Profile.css";
import { Link } from "react-router-dom";
// глобальные компоненты
import Header from "../Header/Header";

const Profile = () => {
  return (
    <main>
      <Header />

      <h2 className="profile__welcome">Привет, Александра!</h2>
      <div className="profile__container">
        <p className="profile__name">Имя</p>
        <p className="profile__name">Александра</p>
        <p className="profile__email">E-mail</p>
        <p className="profile__email">kiri2lova@gmail.com</p>
      </div>
      <div className="profile__buttons">
        <button className="profile__edit">Редактировать</button>
        <Link className="profile__logout" to="/signin">
          Выйти из аккаунта
        </Link>
      </div>
    </main>
  );
};

export default Profile;
