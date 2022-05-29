import { authApiAddress } from "./constants";

class Auth {
  constructor(address) {
    this._address = address;
    this._headers = {
      "Content-type": "application/json",
    };
  }

  _handleResponse = (response) => {
    return response.ok ? response.json() : Promise.reject(`Error: ${response.message}`);
  };

  authorization({ email, password }) {
    return fetch(`${this._address}/signin`, {
      method: "POST",
      credentials: "include",
      headers: this._headers,
      body: JSON.stringify({ email, password }),
    }).then(this._handleResponse);
  }

  registration({ name, email, password }) {
    return fetch(`${this._address}/signup`, {
      method: "POST",
      credentials: "include",
      headers: this._headers,
      body: JSON.stringify({ name, email, password }),
    }).then(this._handleResponse);
  }
}

const auth = new Auth(authApiAddress);

export default auth;
