const filterMovies = (movies, { search, shortMovies }) => {
  if (typeof search === "string" && typeof shortMovies === "boolean") {
    return movies.filter((movie) => {
      const fitsByName =
        movie.nameRU.toLowerCase().includes(search.toLowerCase()) ||
        movie.nameEN.toLowerCase().includes(search.toLowerCase());

      const isShortMovie = movie.duration <= 40;

      return (
        fitsByName &&
        ((shortMovies && isShortMovie) || (!shortMovies && !isShortMovie))
      );
    });
  }
  return movies;
};

export default filterMovies;
