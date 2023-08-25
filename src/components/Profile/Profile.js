import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import "./Profile.css";

const Profile = ({ onSubmit, onLogout }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);

  const navigate = useNavigate();

  const handleClickLogout = () => {
    navigate("/signin");
    onLogout();
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, email });
  };

  return (
    <main className="profile">
      <form className="profile__form" onSubmit={handleSubmit}>
        <section className="profile__top">
          <h1 className="profile__welcome">Привет, {currentUser.name}!</h1>

          <div className="profile__container">
            <div className="profile__field">
              <span>Имя</span>
              <input
                className="profile__field-input"
                type="text"
                name="name"
                autoComplete="email"
                placeholder="Имя"
                minLength={2}
                maxLength={30}
                value={name}
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
                minLength={8}
                value={email}
                onChange={handleChangeEmail}
              />
            </div>
          </div>
        </section>

        <div className="profile__buttons">
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
