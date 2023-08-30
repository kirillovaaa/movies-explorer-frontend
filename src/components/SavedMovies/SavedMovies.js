import React, { useContext, useEffect, useState } from "react";
import "./SavedMovies.css";
// глобальные компоненты
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
// контесты
import SavedMoviesContext from "../../contexts/SavedMoviesContext";
// утилиты
import MainApi from "../../utils/MainApi";

const SavedMovies = () => {
  const [search, setSearch] = useState("");
  const [shortMovies, setShortMovies] = useState(false);

  const [movies, setMovies] = useContext(SavedMoviesContext);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    MainApi.getSavedMovies()
      .then((movies) => {
        setMovies(movies);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setIsLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      setMovies(null);
      setIsLoading(true);
      const result = await MainApi.getSavedMovies({ search, shortMovies });
      setMovies(result);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleToggleShort = (value) => {
    setShortMovies(value);
  };

  return (
    <main className="movies movies_saved">
      <SearchForm
        search={search}
        shortMovies={shortMovies}
        onChangeSearch={handleChangeSearch}
        onToggleShort={handleToggleShort}
        onSubmit={handleSearch}
      />

      {!movies && isLoading && <Preloader />}

      {movies && <MoviesCardList movies={movies} onlyRemove={true} />}
    </main>
  );
};

export default SavedMovies;
