import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

const MoviesCardList = ({
  movies,
  hasMoreMovies = false,
  onClickMore,
  allowsRemove,
}) => {
  return (
    <>
      <div className="movies__card-list">
        {movies.map((m) => (
          <MoviesCard
            key={m.id}
            imageSrc={m.imageSrc}
            name={m.name}
            description={m.description}
            time={m.time}
            isSaved={m.isSaved}
            hasRemoveButton={allowsRemove}
          />
        ))}
      </div>

      {hasMoreMovies && (
        <button
          type="button"
          className="movies__more-button"
          onClick={onClickMore}
        >
          Ещё
        </button>
      )}
    </>
  );
};

export default MoviesCardList;
