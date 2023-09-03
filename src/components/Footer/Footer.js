import React from "react";
import { useMatch } from "react-router-dom";
import "./Footer.css";
import textLabels from "../../constants/textLabels";

const Footer = () => {
  const matchMain = useMatch("/");
  const matchMovies = useMatch("/movies");
  const matchSavedMovies = useMatch("/saved-movies");

  const matchRoutes = matchMain || matchMovies || matchSavedMovies;

  if (!matchRoutes) {
    return null;
  }

  return (
    <footer className="footer">
      <p className="footer__description">{textLabels.footer.description}</p>

      <div className="footer__info">
        <ul className="footer__links">
          <li className="footer__link-item">
            <a
              className="footer__link"
              href="https://practicum.yandex.ru/"
              target="blank"
            >
              {textLabels.footer.links.practicum}
            </a>
          </li>

          <li className="footer__link-item">
            <a
              className="footer__link"
              href="https://github.com/kirillovaaa"
              target="blank"
            >
              {textLabels.footer.links.github}
            </a>
          </li>
        </ul>

        <span className="footer__copyright">{textLabels.footer.copyright}</span>
      </div>
    </footer>
  );
};

export default Footer;
