import React from "react";
import closeIcon from "../../images/close-icon.svg";
import "./MoviesCard.css";

const MoviesCard = ({ name, time, imageSrc, hasRemoveButton, isSaved }) => {
  return (
    <div className="movies__card">
      <img
        className="movies__card-image"
        src={imageSrc}
        alt="Картинка к фильму"
      />

      <div className="movies__card-description">
        <div className="movies__card-text">
          <h4 className="movies__card-name">{name}</h4>
          <span className="movies__card-time">{time}</span>
        </div>

        {hasRemoveButton ? (
          <button className="movies__card-delete-button">
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
    </div>
  );
};

export default MoviesCard;
