import React from "react";
import "./AboutMe.css";
import myAvatar from "../../../images/avatar.png";
import textLabels from "../../../constants/textLabels";

const AboutMe = () => {
  return (
    <section className="about-me" id="about-me">
      <h2 className="section-header">{textLabels.main.aboutMe.header}</h2>

      <div className="about-me__wrapper">
        <div className="about-me__wrapper-text">
          <h3 className="about-me__title">{textLabels.main.aboutMe.title}</h3>

          <p className="about-me__subtitle">
            {textLabels.main.aboutMe.subtitle}
          </p>

          <p className="about-me__description">
            {textLabels.main.aboutMe.description}
          </p>

          <a
            className="about-me__git-link"
            href={textLabels.main.aboutMe.github.link}
            target="blank"
          >
            {textLabels.main.aboutMe.github.label}
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
