import { backendApiAddress } from "../constants";

class MainApi {
  constructor(address) {
    this._address = address;
    this._headers = {
      "Content-type": "application/json",
    };
  }

  _handleResponse(response) {
    return response.ok ? response.json() : Promise.reject("Ошибка - " + response.message);
  }

  updateUser({ name, email }) {
    return fetch(`${this._address}/users/me`, {
      method: "PATCH",
      credentials: "include",
      headers: this._headers,
      body: JSON.stringify({ name, email }),
    }).then(this._handleResponse);
  }

  getSavedMovies() {
    return fetch(`${this._address}/movies`, {
      credentials: "include",
      headers: this._headers,
    }).then(this._handleResponse);
  }

  saveMovie(body) {
    return fetch(`${this._address}/movies`, {
      method: "POST",
      credentials: "include",
      headers: this._headers,
      body: JSON.stringify(body),
    }).then(this._handleResponse);
  }

  deleteMovie(id) {
    return fetch(`${this._address}/movies/${id}`, {
      method: "DELETE",
      credentials: "include",
      headers: this._headers,
    }).then(this._handleResponse);
  }
}

const mainApi = new MainApi(backendApiAddress);

export default mainApi;
