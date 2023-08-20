import React from "react";
import { useMatch } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const matchMain = useMatch("/");
  const matchMovies = useMatch("/movies");
  const matchSavedMovies = useMatch("/saved-movies");

  const showFooter = matchMain || matchMovies || matchSavedMovies;

  if (!showFooter) {
    return null;
  }

  return (
    <footer className="footer">
      <p className="footer__description">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>

      <div className="footer__info">
        <span className="footer__copyright">© 2023</span>

        <ul className="footer__links">
          <a
            className="footer__link"
            href="https://practicum.yandex.ru/"
            target="blank"
          >
            Яндекс.Практикум
          </a>
          <a className="footer__link" href="https://github.com/kirillovaaa">
            Github
          </a>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
