import { moviesApiAddress } from "./constants";

class Api {
  constructor(address) {
    this._address = address;
    this._headers = {
      "Content-type": "application/json",
    };
  }

  _handleResponse(response) {
    return response.ok ? response.json() : Promise.reject("Ошибка - " + response.message);
  }

  getMovies() {
    return fetch(`${this._address}/beatfilm-movies`, {
      headers: this._headers,
    }).then(this._handleResponse);
  }
}

const api = new Api(moviesApiAddress);

export default api;
