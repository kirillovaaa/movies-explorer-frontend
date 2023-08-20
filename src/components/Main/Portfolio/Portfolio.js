import React from "react";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>

      <nav className="portfolio__links">
        <a
          href="https://kirillovaaa.github.io/how-to-learn/"
          className="portfolio__link"
          target="blank"
        >
          Статичный сайт
          <span className="portfolio__icon">↗</span>
        </a>

        <a
          href="https://kirillovaaa.github.io/russian-travel/"
          className="portfolio__link"
          target="blank"
        >
          Адаптивный сайт
          <span className="portfolio__icon">↗</span>
        </a>

        <a
          href="https://github.com/kirillovaaa/react-mesto-api-full-gha/"
          className="portfolio__link"
          target="blank"
        >
          Одностраничное приложение
          <span className="portfolio__icon">↗</span>
        </a>
      </nav>
    </section>
  );
};

export default Portfolio;
