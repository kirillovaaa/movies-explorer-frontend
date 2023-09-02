import { useContext, useEffect, useState } from "react";
import SavedMoviesContext from "../contexts/SavedMoviesContext";
import CurrentUserContext from "../contexts/CurrentUserContext";
import MainApi from "./MainApi";
import filterMovies from "./filterMovies";

const useSavedMovies = (
  { search, shortMovies } = { search: "", shortMovies: false }
) => {
  const { _id } = useContext(CurrentUserContext);
  const [savedMovies, setSavedMovies] = useContext(SavedMoviesContext);
  const [savedMoviesSearchResult, setSavedMoviesSearchResult] = useState(null);

  useEffect(() => {
    const localMovies = localStorage.getItem(`savedMovies-${_id}`);
    if (localMovies) {
      setSavedMovies(JSON.parse(localMovies));
      setSavedMoviesSearchResult(
        filterMovies(JSON.parse(localMovies), { search, shortMovies })
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateSavedMoviesState = (data) => {
    localStorage.setItem(`savedMovies-${_id}`, JSON.stringify(data));
    setSavedMovies(data);
    setSavedMoviesSearchResult(filterMovies(data, { search, shortMovies }));
  };

  const initialize = async () => {
    try {
      const result = await MainApi.getSavedMovies();
      updateSavedMoviesState(result);
    } catch (e) {
      return Promise.reject(e);
    }
  };

  const addSavedMovie = async (movie) => {
    const newCard = {
      movieId: movie.id,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: `https://api.nomoreparties.co/${movie.image.url}`,
      thumbnail: `https://api.nomoreparties.co/${movie.image.formats.thumbnail.url}`,
      trailerLink: movie.trailerLink,
    };
    try {
      const res = await MainApi.addCard(newCard);
      const oldSavedMovies = savedMovies ? [...savedMovies] : [];
      const newSavedMovies = [res, ...oldSavedMovies];
      updateSavedMoviesState(newSavedMovies);
    } catch (e) {
      console.log(e);
    }
  };

  const removeSavedMovie = async (movie) => {
    const movieItem = savedMovies.find(
      (m) => movie.id === m.movieId || movie.movieId === m.movieId
    );
    try {
      const res = await MainApi.removeCard(movieItem._id);
      const newSavedMovies = savedMovies.filter(
        (sm) => sm.movieId !== res.movieId
      );
      updateSavedMoviesState(newSavedMovies);
    } catch (e) {
      console.log(e);
    }
  };

  const searchSavedMovies = () => {
    if (savedMovies) {
      const result = filterMovies(savedMovies, { search, shortMovies });
      setSavedMoviesSearchResult(result);
    }
  };

  return {
    savedMovies,
    savedMoviesSearchResult,
    searchSavedMovies,
    initialize,
    addSavedMovie,
    removeSavedMovie,
  };
};

export default useSavedMovies;
