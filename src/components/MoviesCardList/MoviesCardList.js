import React from "react";
import "./MoviesCardList.css";
// компоненты
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";
import textLabels from "../../constants/textLabels";

const MoviesCardList = ({
  movies,
  savedMovies,
  onClickMore,
  isLoading = false,
  hasMoreMovies = false,
  onlyRemove = false,
  onCardAdd,
  onCardRemove,
}) => {
  if (movies.length === 0) {
    return (
      <span className="movies__card-list-empty">
        {textLabels.moviesCardList.emptyMessage}
      </span>
    );
  }

  return (
    <>
      <ul className="movies__card-list">
        {movies.map((m) => (
          <MoviesCard
            // уникальный id карточки
            // - /movies        =>  id
            // - /saved-movies  => _id
            key={m.id || m._id}
            {...m}
            isSaved={savedMovies?.find((s) => s.movieId === m.id)}
            hasRemoveButton={onlyRemove}
            onCardAdd={onCardAdd}
            onCardRemove={onCardRemove}
          />
        ))}
      </ul>

      {hasMoreMovies &&
        (isLoading ? (
          <Preloader />
        ) : (
          <button
            type="button"
            className="movies__more-button"
            onClick={onClickMore}
          >
            {textLabels.moviesCardList.actions.more}
          </button>
        ))}
    </>
  );
};

export default MoviesCardList;
