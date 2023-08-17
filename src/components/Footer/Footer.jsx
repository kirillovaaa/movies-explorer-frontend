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
      <h4 className="footer__description">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h4>

      <div className="footer__info">
        <span className="footer__copyright">© 2023</span>

        <div className="footer__links">
          <a className="footer__link" href="https://practicum.yandex.ru/">
            Яндекс.Практикум
          </a>
          <a className="footer__link" href="https://github.com/kirillovaaa">
            Github
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
