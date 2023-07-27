import React from "react";
import "./AboutMe.css";
import myAvatar from "../../../images/avatar.png";
function AboutMe() {
  return (
    <section className="aboutme">
      <h3 className="section-title">Студентка</h3>
      <div className="aboutme__wrapper">
        <div className="aboutme__wrapper-text">
          <h2 className="aboutme__title">Александра</h2>
          <p className="aboutme__subtitle">Фронтенд-разработчица, 22 года</p>
          <p className="aboutme__discription">
            Несколько лет посвятила медицине и работала ассистентом хирурга. В
            новой деятельности нашла много плюсов: возможность работы из любой
            точки мира, неограниченные ресурсы в создании любых проектов, рост в
            профессиональной деятельности. Активно занимаюсь спортом, учусь
            новому и читаю книги, пишу дневник, чтобы следить за результатами
            личностного роста
          </p>
          <a
            className="aboutme__git-link"
            href="https://github.com/kirillovaaa"
          >
            Github
          </a>
        </div>
        <img src={myAvatar} alt="фотография" className="aboutme__avatar" />
      </div>
    </section>
  );
}

export default AboutMe;
