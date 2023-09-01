import React from "react";
import closeIcon from "../../images/close-icon.svg";
import "./MoviesCard.css";

const MoviesCard = ({ name, time, imageSrc, hasRemoveButton, isSaved }) => {
  return (
    <li className="movies__card">
      <img className="movies__card-image" src={imageSrc} alt={name} />

      <div className="movies__card-description">
        <div className="movies__card-text">
          <h2 className="movies__card-name">{name}</h2>
          <span className="movies__card-time">{time}</span>
        </div>

        {hasRemoveButton ? (
          <button type="button" className="movies__card-delete-button">
            <img src={closeIcon} alt="Закрыть" />
          </button>
        ) : (
          <div
            className={`movies__card-indicator ${
              isSaved ? "movies__card-indicator_active" : ""
            }`}
          ></div>
        )}
      </div>
    </li>
  );
};

export default MoviesCard;
