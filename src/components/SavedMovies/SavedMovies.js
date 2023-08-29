import React from "react";
import "./SavedMovies.css";
// глобальные компоненты
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

const SavedMovies = ({ movies }) => {
  return (
    <main className="movies movies_saved">
      <SearchForm />
      <MoviesCardList movies={movies} onlyRemove={true} />
    </main>
  );
};

export default SavedMovies;
