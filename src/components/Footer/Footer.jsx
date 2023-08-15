import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <h4 className="footer__discription">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h4>
      <div className="footer__info">
        <p className="footer__copyright">© 2023</p>
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
