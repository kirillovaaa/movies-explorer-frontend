import React from "react";
import "./Portfolio.css";
import pointerArrow from "../../../images/pointer.svg";

function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <nav className="portfolio__links">
        <a
          href="https://kirillovaaa.github.io/how-to-learn/"
          className="portfolio__link"
        >
          Статичный сайт
          <img
            src={pointerArrow}
            className="portfolio__icon"
            alt="Стрелка-указатель"
          />
        </a>
        <a
          href="https://kirillovaaa.github.io/russian-travel/"
          className="portfolio__link"
        >
          Адаптивный сайт
          <img
            src={pointerArrow}
            className="portfolio__icon"
            alt="Стрелка-указатель"
          />
        </a>
        <a
          href="https://mesto-frontend.nomoredomains.xyz"
          className="portfolio__link"
        >
          Одностраничное приложение
          <img
            src={pointerArrow}
            className="portfolio__icon"
            alt="Стрелка-указатель"
          />
        </a>
      </nav>
    </section>
  );
}

export default Portfolio;
