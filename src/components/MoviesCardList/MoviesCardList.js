import React from "react";
import "./MoviesCardList.css";
// компоненты
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";

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
    return <span>По вашему запросу фильмов нет</span>;
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
            Ещё
          </button>
        ))}
    </>
  );
};

export default MoviesCardList;
