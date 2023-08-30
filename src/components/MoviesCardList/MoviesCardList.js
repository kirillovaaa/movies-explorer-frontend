import React from "react";
import "./MoviesCardList.css";
// компоненты
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";

const MoviesCardList = ({
  movies,
  savedItems,
  isLoading = false,
  hasMoreMovies = false,
  onClickMore,
  onlyRemove = false,
}) => {
  if (movies.length === 0) {
    return <span>По вашему запросу фильмов нет</span>;
  }

  return (
    <>
      <ul className="movies__card-list">
        {movies.map((m) => (
          <MoviesCard
            key={m.id || m._id}
            {...m}
            isSaved={savedItems?.find((s) => s === m.id)}
            hasRemoveButton={onlyRemove}
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
