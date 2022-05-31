import { moviesApiAddress, authApiAddress } from "./constants";

class Api {
  constructor(moviesApi, authApi) {
    this._moviesApi = moviesApi;
    this._authApi = authApi;
    this._headers = {
      "Content-type": "application/json",
    };
  }

  _handleResponse(response) {
    return response.ok ? response.json() : Promise.reject("Ошибка - " + response.message);
  }

  getMovies() {
    return fetch(`${this._moviesApi}/beatfilm-movies`, {
      headers: this._headers,
    }).then(this._handleResponse);
  }

  updateUser({ name, email }) {
    return fetch(`${this._authApi}/users/me`, {
      method: "PATCH",
      credentials: "include",
      headers: this._headers,
      body: JSON.stringify({ name, email }),
    }).then(this._handleResponse);
  }
}

const api = new Api(moviesApiAddress, authApiAddress);

export default api;
