import React from "react";
import closeIcon from "../../images/close-icon.svg";
import humanizeTime from "../../utils/humanizeTime";
import "./MoviesCard.css";

const MoviesCard = ({
  isSaved,
  hasRemoveButton,
  onCardAdd,
  onCardRemove,
  ...movie
}) => {
  const handleClickRemove = (e) => {
    e.preventDefault();
    onCardRemove(movie);
  };

  const handleToggleSave = (e) => {
    e.preventDefault();
    if (isSaved) {
      onCardRemove(movie);
    } else {
      onCardAdd(movie);
    }
  };

  return (
    <a
      className="movies__card"
      href={movie.trailerLink}
      target="_blank"
      rel="noreferrer"
    >
      <li className="movies__card-wrapper">
        <img
          className="movies__card-image"
          src={
            movie.image.url
              ? `https://api.nomoreparties.co/${movie.image.url}`
              : movie.image
          }
          alt={movie.image.alternativeText}
        />

        <div className="movies__card-description">
          <div className="movies__card-text">
            <h2 className="movies__card-name">
              {movie.nameRU || movie.nameEN}
            </h2>
            <span className="movies__card-time">
              {humanizeTime(movie.duration)}
            </span>
          </div>

          {hasRemoveButton ? (
            <button
              type="button"
              className="movies__card-delete-button"
              onClick={handleClickRemove}
            >
              <img src={closeIcon} alt="Закрыть" />
            </button>
          ) : (
            <button
              type="button"
              className={`movies__card-indicator ${
                isSaved ? "movies__card-indicator_active" : ""
              }`}
              onClick={handleToggleSave}
            ></button>
          )}
        </div>
      </li>
    </a>
  );
};

export default MoviesCard;
