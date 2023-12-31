import React, { useEffect, useState } from "react";
import "./Movies.css";
// компоненты
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import MoviesApi from "../../utils/MoviesApi";
import usePageAmount from "../../utils/usePageAmount";
// утилиты
import useSavedMovies from "../../utils/useSavedMovies";

const Movies = () => {
  const [search, setSearch] = useState("");
  const [shortMovies, setShortMovies] = useState(false);

  const [movies, setMovies] = useState(null);
  const [totalLength, setTotalLength] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const { savedMovies, initialize, addSavedMovie, removeSavedMovie } =
    useSavedMovies();

  const { initialAmount, nextPageAmount } = usePageAmount();

  useEffect(() => {
    const savedSearch = localStorage.getItem("recentSearch");
    if (savedSearch) {
      const json = JSON.parse(savedSearch);
      setSearch(json.search);
      setShortMovies(json.shortMovies);
      setMovies(json.movies);
      setTotalLength(json.totalLength);
    }
    if (!savedMovies) {
      setIsLoading(true);
      initialize()
        .catch((e) => {
          console.log(e);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      const result = await MoviesApi.getMovies({
        search,
        shortMovies,
        from: 0,
        amount: initialAmount,
      });
      updateLocalStorage({
        search,
        shortMovies,
        movies: result.page,
        totalLength: result.totalLength,
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
      const result = await MoviesApi.getMovies({
        search,
        shortMovies,
        from: movies.length,
        amount: nextPageAmount,
      });
      const newMovies = [...movies, ...result.page];
      updateLocalStorage({
        search,
        shortMovies,
        movies: newMovies,
        totalLength: result.totalLength,
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
        onToggleShort={handleToggleShort}
        onSubmit={handleSearch}
      />

      {!movies ? (
        isLoading && <Preloader />
      ) : (
        <MoviesCardList
          movies={movies}
          savedMovies={savedMovies}
          isLoading={isLoading}
          hasMoreMovies={movies.length < totalLength}
          onClickMore={handleClickMore}
          onCardAdd={addSavedMovie}
          onCardRemove={removeSavedMovie}
        />
      )}
    </main>
  );
};

export default Movies;
