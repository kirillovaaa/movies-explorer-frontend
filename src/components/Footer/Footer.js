import React from "react";
import { useMatch } from "react-router-dom";
import "./Footer.css";

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
      <p className="footer__description">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>

      <div className="footer__info">
        <ul className="footer__links">
          <li className="footer__link-item">
            <a
              className="footer__link"
              href="https://practicum.yandex.ru/"
              target="blank"
            >
              Яндекс.Практикум
            </a>
          </li>

          <li className="footer__link-item">
            <a
              className="footer__link"
              href="https://github.com/kirillovaaa"
              target="blank"
            >
              Github
            </a>
          </li>
        </ul>

        <span className="footer__copyright">© 2023</span>
      </div>
    </footer>
  );
};

export default Footer;
