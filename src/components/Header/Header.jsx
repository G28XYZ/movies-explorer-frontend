import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import { useLocation } from "react-router-dom";
import React from "react";

function Header() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <header className="header">
      <img src={logo} alt="Логотип" />

      {path === "/movies" ? (
        <nav className="header__navigate header__navigate-movies">
          <ul className="header__movies text">
            <li>
              <Link to="/movies" className="link">
                Фильмы
              </Link>
            </li>
            <li>
              <Link to="/saved-movies" className="link">
                Сохранённые фильмы
              </Link>
            </li>
            <li className="header__movies-item">
              <Link to="/profile" className="header__link-profile color_secondary link">
                Аккаунт
              </Link>
            </li>
          </ul>
        </nav>
      ) : (
        <nav className="header__navigate">
          <ul className="header__auth text">
            <li className="header__auth-item link">
              <Link to="/sign-up" className="header__link">
                Регистрация
              </Link>
            </li>
            <li className="header__auth-item color_primary link">
              <Link to="/sign-in" className="header__link">
                Войти
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
