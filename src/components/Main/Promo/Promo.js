import React from "react";
import "./Promo.css";
import promoImage from "../../../images/practicum-logo.svg";
import textLabels from "../../../constants/textLabels";

const Promo = () => {
  return (
    <section className="promo">
      <img src={promoImage} className="promo__image" alt="лого практикум" />

      <h1 className="promo__title">{textLabels.main.promo.title}</h1>
    </section>
  );
};
export default Promo;
