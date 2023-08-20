import React from "react";
import "./Techs.css";

const Techs = () => {
  return (
    <section className="techs" id="techs">
      <h2 className="section-header">Технологии</h2>
      <h2 className="techs__title">7 технологий</h2>

      <p className="techs__subtitle">
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>

      <div className="techs__items">
        <span className="techs__item">HTML</span>
        <span className="techs__item">CSS</span>
        <span className="techs__item">JS</span>
        <span className="techs__item">React</span>
        <span className="techs__item">Git</span>
        <span className="techs__item">Express.js</span>
        <span className="techs__item">mongoDB</span>
      </div>
    </section>
  );
};

export default Techs;
