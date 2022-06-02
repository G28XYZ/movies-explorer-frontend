const moviesApiAddress = "https://api.nomoreparties.co";
const backendApiAddress = "https://api-movies.nomoredomains.xyz";

const regForSymbols = /[_~!@#$%^&*()\[\]+`'";:<>\/\\|=]/g;
const regForName = /[a-z-. а-яё]+/g;
const regForPassword = /[0-9a-z-а-яё]+/g;

export const validationMessages = {
  name: "Имя содержит недопустимые символы. Текст может состоять из латиницы, кирилицы, дефиса и/или пробела.",
  email: "Введите корректный формат почты",
  password:
    "Пароль содержит не допустимые символы. Текст может состоять из цифр, латиницы, кирилицы, дефиса.",
};

export const resMessages = {
  409: "Пользователь с введенным email уже существует.",
  401: "Не авторизован / не зарегистрирован.",
  500: "Ошибка на сервере.",
  400: "Введенные данные невалидны проверьте адресс или введите корректные данные.",
};

export {
  moviesApiAddress,
  backendApiAddress,
  regForPassword,
  regForName,
  regForSymbols,
};
