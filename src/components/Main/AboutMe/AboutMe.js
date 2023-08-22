import React from "react";
import "./AboutMe.css";
import myAvatar from "../../../images/avatar.png";

const AboutMe = () => {
  return (
    <section className="about-me" id="about-me">
      <h2 className="section-header">Студентка</h2>

      <div className="about-me__wrapper">
        <div className="about-me__wrapper-text">
          <h3 className="about-me__title">Александра</h3>

          <p className="about-me__subtitle">Фронтенд-разработчица, 22 года</p>

          <p className="about-me__description">
            Несколько лет посвятила медицине и работала ассистентом хирурга. В
            новой деятельности нашла много плюсов: возможность работы из любой
            точки мира, неограниченные ресурсы в создании любых проектов, рост в
            профессиональной деятельности. Активно занимаюсь спортом, учусь
            новому и читаю книги, пишу дневник, чтобы следить за результатами
            личностного роста
          </p>

          <a
            className="about-me__git-link"
            href="https://github.com/kirillovaaa"
            target="blank"
          >
            Github
          </a>
        </div>

        <img
          src={myAvatar}
          alt="Фотография создателя проекта"
          className="about-me__avatar"
        />
      </div>
    </section>
  );
};

export default AboutMe;
