import React from "react";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>

      <ul className="portfolio__links">
        <li className="portfolio__link-item">
          <a
            href="https://kirillovaaa.github.io/how-to-learn/"
            className="portfolio__link"
            target="blank"
          >
            Статичный сайт
            <span className="portfolio__icon">↗</span>
          </a>
        </li>

        <li className="portfolio__link-item">
          <a
            href="https://kirillovaaa.github.io/russian-travel/"
            className="portfolio__link"
            target="blank"
          >
            Адаптивный сайт
            <span className="portfolio__icon">↗</span>
          </a>
        </li>

        <li className="portfolio__link-item">
          <a
            href="https://github.com/kirillovaaa/react-mesto-api-full-gha/"
            className="portfolio__link"
            target="blank"
          >
            Одностраничное приложение
            <span className="portfolio__icon">↗</span>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Portfolio;
