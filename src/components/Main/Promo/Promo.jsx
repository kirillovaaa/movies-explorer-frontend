import React from "react";
import "./Promo.css";
import promoImage from "../../../images/practicum-logo.svg";

function Promo() {
  return (
    <main class>
      <section className="promo">
        <img src={promoImage} className="promo__image" alt="лого практикум" />
        <h1 className="promo__title">
          Учебный проект студента факультета Веб-разработки.
        </h1>
      </section>
    </main>
  );
}
export default Promo;
