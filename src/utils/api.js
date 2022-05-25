class Api {
  constructor(address) {
    this._addres = address;
    this._headers = {
      "Content-type": "application/json",
    };
  }

  _handleResponse(response) {
    return response.ok
      ? response.json()
      : Promise.reject("Ошибка - " + response.message);
  }

  getMovies() {
    return fetch(this._addres, {
      credentials: "include",
      headers: this._headers,
    }).then(this._handleResponse);
  }
}

// const api = new Api("https://api-movies.nomoredomains.xyz");
const api = new Api("http://localhost:3000");

export default api;
