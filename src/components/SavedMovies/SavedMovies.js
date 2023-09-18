import React, { useEffect, useState } from "react";
import "./SavedMovies.css";
// глобальные компоненты
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
// утилиты
import useSavedMovies from "../../utils/useSavedMovies";

const SavedMovies = () => {
  const [search, setSearch] = useState("");
  const [shortMovies, setShortMovies] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    savedMoviesSearchResult,
    initialize,
    searchSavedMovies,
    removeSavedMovie,
  } = useSavedMovies({ search, shortMovies });

  useEffect(() => {
    setIsLoading(true);
    initialize()
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
      setIsLoading(true);
      searchSavedMovies();
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
        isSearchRequired={false}
        shortMovies={shortMovies}
        onChangeSearch={handleChangeSearch}
        onToggleShort={handleToggleShort}
        onSubmit={handleSearch}
      />

      {isLoading ? (
        <Preloader />
      ) : savedMoviesSearchResult ? (
        <MoviesCardList
          movies={savedMoviesSearchResult}
          onlyRemove={true}
          onCardRemove={removeSavedMovie}
        />
      ) : null}
    </main>
  );
};

export default SavedMovies;
