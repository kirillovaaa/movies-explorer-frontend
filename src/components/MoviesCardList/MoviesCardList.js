import React, { useContext } from "react";
import "./MoviesCardList.css";
// компоненты
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";
// контексты
import SavedMoviesContext from "../../contexts/SavedMoviesContext";

const MoviesCardList = ({
  movies,
  isLoading = false,
  hasMoreMovies = false,
  onClickMore,
  onlyRemove = false,
}) => {
  const [savedMovies] = useContext(SavedMoviesContext);

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
            isSaved={savedMovies.find((sm) => sm.id === m.id)}
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
