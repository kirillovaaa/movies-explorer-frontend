import React from "react";
import "./Promo.css";

function Promo() {
  return (
    <section className="promo">
      <h1 className="promo__title">
        Учебный проект студента факультета Веб-разработки.
      </h1>
      <div className="promo__items">
        <p className="techs__item">О проекте</p>
        <p className="techs__item">Технологии</p>
        <p className="techs__item">Студент</p>
      </div>
    </section>
  );
}
export default Promo;
