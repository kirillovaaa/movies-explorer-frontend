import React from "react";
import closeIcon from "../../images/close-icon.svg";
import humanizeTime from "../../utils/humanizeTime";
import "./MoviesCard.css";

const MoviesCard = ({
  nameRU,
  nameEN,
  duration,
  image,
  hasRemoveButton,
  trailerLink,
  isSaved,
}) => {
  return (
    <a
      className="movies__card"
      href={trailerLink}
      target="_blank"
      rel="noreferrer"
    >
      <li className="movies__card-wrapper">
        <img
          className="movies__card-image"
          src={`https://api.nomoreparties.co/${image.url}`}
          alt={image.alternativeText}
        />

        <div className="movies__card-description">
          <div className="movies__card-text">
            <h2 className="movies__card-name">{nameRU || nameEN}</h2>
            <span className="movies__card-time">{humanizeTime(duration)}</span>
          </div>

          {hasRemoveButton ? (
            <button type="button" className="movies__card-delete-button">
              <img src={closeIcon} alt="Закрыть" />
            </button>
          ) : (
            <button
              type="button"
              className={`movies__card-indicator ${
                isSaved ? "movies__card-indicator_active" : ""
              }`}
            ></button>
          )}
        </div>
      </li>
    </a>
  );
};

export default MoviesCard;
