import React from "react";
import "./Portfolio.css";
import textLabels from "../../../constants/textLabels";

const Portfolio = () => {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">{textLabels.main.portfolio.title}</h2>

      <ul className="portfolio__links">
        {textLabels.main.portfolio.links.map((l) => (
          <li key={l.link} className="portfolio__link-item">
            <a href={l.link} className="portfolio__link" target="blank">
              {l.label}
              <span className="portfolio__icon">↗</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Portfolio;
