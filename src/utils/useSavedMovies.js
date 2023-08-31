import { useContext } from "react";
import SavedMoviesContext from "../contexts/SavedMoviesContext";
import MainApi from "./MainApi";

const useSavedMovies = () => {
  const [savedMovies, setSavedMovies] = useContext(SavedMoviesContext);

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
      const prevSavedMovies = savedMovies ? [...savedMovies] : [];
      setSavedMovies([res, ...prevSavedMovies]);
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
      setSavedMovies(newSavedMovies);
    } catch (e) {
      console.log(e);
    }
  };

  return {
    savedMovies,
    setSavedMovies,
    addSavedMovie,
    removeSavedMovie,
  };
};

export default useSavedMovies;
