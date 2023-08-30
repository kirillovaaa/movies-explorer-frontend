import getResponseData from "./getResponseData";

class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
    this._cachedMovies = null;
  }

  _setToken = (token) => {
    this._headers.authorization = `Bearer ${token}`;
  };

  authorize = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      this._setToken(token);
      try {
        return await this.getUserInfo();
      } catch (e) {
        if (e.status === 401) {
          this.logout();
        }
        Promise.reject(e);
      }
    }
    return Promise.reject(`Токен не найден в локальном хранилище`);
  };

  logout = () => {
    localStorage.removeItem("token");
  };

  register = async (name, email, password) => {
    return await getResponseData(`${this._baseUrl}/signup`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({ name, email, password }),
    });
  };

  login = async (email, password) => {
    try {
      const res = await getResponseData(`${this._baseUrl}/signin`, {
        method: "POST",
        headers: this._headers,
        body: JSON.stringify({ email, password }),
      });
      localStorage.setItem("token", res.token);
      this._setToken(res.token);
    } catch (e) {
      return Promise.reject(e);
    }
  };

  getUserInfo = async () => {
    return await getResponseData(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    });
  };

  setUserInfo = async (name, email) => {
    return await getResponseData(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({ name, email }),
    });
  };

  getSavedMovies = async () => {
    return await getResponseData(`${this._baseUrl}/movies`, {
      headers: this._headers,
    });
  };

  //   addCard = (name, link) => {
  //     return fetch(`${this._baseUrl}/cards`, {
  //       method: "POST",
  //       headers: this._headers,
  //       body: JSON.stringify({ name, link }),
  //     }).then(this._getResponseData);
  //   };

  //   removeCard = (id) => {
  //     return fetch(`${this._baseUrl}/cards/${id}`, {
  //       method: "DELETE",
  //       headers: this._headers,
  //     }).then(this._getResponseData);
  //   };
}

const api = new Api({
  // baseUrl: "https://api.movies-diploma.nomoredomains.xyz",
  baseUrl: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
