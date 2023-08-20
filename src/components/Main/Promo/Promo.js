import React from "react";
import "./Promo.css";
import promoImage from "../../../images/practicum-logo.svg";

const Promo = () => {
  return (
    <section className="promo">
      <img src={promoImage} className="promo__image" alt="лого практикум" />

      <h1 className="promo__title">
        Учебный проект студентки факультета Веб-разработки.
      </h1>
    </section>
  );
};
export default Promo;
