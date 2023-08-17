import React from "react";
import "./SavedMovies.css";
// глобальные компоненты
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
// датасет
import { moviesList } from "../Movies/Movies";

const SavedMovies = () => {
  const savedMoviesList = moviesList.filter((m) => m.isSaved === true);

  return (
    <main className="movies movies_saved">
      <SearchForm />
      <MoviesCardList movies={savedMoviesList} allowsRemove={true} />
    </main>
  );
};

export default SavedMovies;
