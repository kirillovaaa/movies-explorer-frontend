class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._cachedMovies = null;
  }

  _getResponseData = (res) => {
    if (res.ok) {
      return res.json().then((res) => res);
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  };

  _fetchMovies = async () => {
    if (!this._cachedMovies) {
      try {
        const res = await fetch(this._baseUrl);
        const responseBody = await res.json();
        if (res.ok) {
          // return responseBody;
          this._cachedMovies = responseBody;
        } else {
          throw Error({ status: res.status, ...responseBody });
        }
      } catch (e) {
        throw Error(e);
      }
    }
    return this._cachedMovies;
  };

  getMovies = async ({ search, shortMovies, from, amount }) => {
    const movies = await this._fetchMovies();

    const filtered = movies.filter((movie) => {
      const fitsByName =
        movie.nameRU.toLowerCase().includes(search.toLowerCase()) ||
        movie.nameEN.toLowerCase().includes(search.toLowerCase());

      const isShortMovie = movie.duration <= 40;

      return (
        fitsByName &&
        ((shortMovies && isShortMovie) || (!shortMovies && !isShortMovie))
      );
    });

    const sorted = new Array(...filtered).sort(
      (a, b) => new Date(b.created_at) - new Date(a.created_at)
    );
    const page = sorted.slice(from, from + amount);

    return { page, totalLength: sorted.length };
  };
}

const api = new Api({
  baseUrl: "https://api.nomoreparties.co/beatfilm-movies",
});

export default api;
