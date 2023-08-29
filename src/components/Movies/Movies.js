import React, { useEffect, useState } from "react";
import "./Movies.css";
// глобальные компоненты
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import MoviesApi from "../../utils/MoviesApi";

const Movies = () => {
  const [search, setSearch] = useState("");
  const [shortMovies, setShortMovies] = useState(false);
  const [pageLength, setPageLength] = useState(4);

  const [movies, setMovies] = useState(null);
  const [totalLength, setTotalLength] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const savedSearch = localStorage.getItem("recentSearch");
    if (savedSearch) {
      const json = JSON.parse(savedSearch);
      setSearch(json.search);
      setShortMovies(json.shortMovies);
      setMovies(json.movies);
      setTotalLength(json.totalLength);
    }
  }, []);

  const searchMovies = async ({ from, amount, ...fields }) => {
    return await MoviesApi.getMovies({
      ...fields,
      from,
      amount,
    });
  };

  const updateLocalStorage = ({ search, shortMovies, movies, totalLength }) => {
    localStorage.setItem(
      "recentSearch",
      JSON.stringify({
        search,
        shortMovies,
        movies,
        totalLength,
      })
    );
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      setMovies(null);
      setTotalLength(0);
      setIsLoading(true);
      const result = await searchMovies({
        search,
        shortMovies,
        from: 0,
        amount: pageLength,
      });
      updateLocalStorage({
        search,
        shortMovies,
        movies: result.page,
        totalLength,
      });
      setMovies(result.page);
      setTotalLength(result.totalLength);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClickMore = async () => {
    try {
      setIsLoading(true);
      const result = await searchMovies({
        search,
        shortMovies,
        from: movies.length,
        amount: pageLength,
      });
      const newMovies = [...movies, ...result.page];
      updateLocalStorage({
        search,
        shortMovies,
        movies: newMovies,
        totalLength,
      });
      setMovies(newMovies);
      setTotalLength(result.totalLength);
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
    <main className="movies">
      <SearchForm
        search={search}
        shortMovies={shortMovies}
        onChangeSearch={handleChangeSearch}
        onToggleShortMovies={handleToggleShort}
        onSubmit={handleSearch}
      />

      {!movies && isLoading && <Preloader />}

      {movies && (
        <MoviesCardList
          movies={movies}
          isLoading={isLoading}
          hasMoreMovies={movies.length < totalLength}
          onClickMore={handleClickMore}
        />
      )}
    </main>
  );
};

export default Movies;
