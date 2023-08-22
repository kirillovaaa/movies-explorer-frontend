import React, { useState } from "react";
import "./Profile.css";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [userName, setUserName] = useState("Александра");
  const [userEmail, setUserEmail] = useState("email@email.com");

  const navigate = useNavigate();

  const handleClickLogout = () => {
    navigate("/signin");
  };

  const handleChangeName = (e) => {
    setUserName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setUserEmail(e.target.value);
  };

  return (
    <main className="profile">
      <form className="profile__form">
        <section className="profile__top">
          <h1 className="profile__welcome">Привет, Александра!</h1>

          <div className="profile__container">
            <div className="profile__field">
              <span>Имя</span>
              <input
                className="profile__field-input"
                type="text"
                name="name"
                autoComplete="email"
                placeholder="Имя"
                value={userName}
                onChange={handleChangeName}
              />
            </div>

            <div className="profile__field-divider"></div>

            <div className="profile__field">
              <span>E-mail</span>
              <input
                className="profile__field-input"
                type="text"
                name="email"
                autoComplete="name"
                placeholder="email@email.com"
                value={userEmail}
                onChange={handleChangeEmail}
              />
            </div>
          </div>
        </section>

        <section className="profile__buttons">
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
        </section>
      </form>
    </main>
  );
};

export default Profile;
