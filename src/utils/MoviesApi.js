import getResponseData from "./getResponseData";
import filterMovies from "./filterMovies";

class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._cachedMovies = null;
  }

  _fetchMovies = async () => {
    if (!this._cachedMovies) {
      this._cachedMovies = await getResponseData(this._baseUrl);
    }
    // TODO: добавить имитацию ожидания, если кеширован
    return this._cachedMovies;
  };

  /**
   * Метод имитирует более сложный api с страницами, фильтрацией
   * и сортировкой по умолчанию по полю "created_at"
   */
  getMovies = async ({ search, shortMovies, from, amount }) => {
    const movies = await this._fetchMovies();
    const filtered = filterMovies(movies, { search, shortMovies });
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
