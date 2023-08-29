import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";
import Preloader from "../Preloader/Preloader";

const MoviesCardList = ({
  movies,
  isLoading,
  hasMoreMovies = false,
  onClickMore,
  onlyRemove,
}) => {
  return (
    <>
      <ul className="movies__card-list">
        {movies.map((m) => (
          <MoviesCard
            key={m.id}
            {...m}
            isSaved={m.isSaved}
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
