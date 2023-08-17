import React from "react";
import "./AboutMe.css";
import myAvatar from "../../../images/avatar.png";

const AboutMe = () => {
  return (
    <section className="about-me">
      <h3 className="section-header">Студентка</h3>

      <div className="about-me__wrapper">
        <div className="about-me__wrapper-text">
          <h2 className="about-me__title">Александра</h2>

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
          >
            Github
          </a>
        </div>

        <img src={myAvatar} alt="фотография" className="about-me__avatar" />
      </div>
    </section>
  );
};

export default AboutMe;
