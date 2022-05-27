import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import { useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <header className="header">
      <img src={logo} alt="Логотип" />

      {path === "/movies" ? (
        <nav className="header__navigante header__navigante-movies text">
          <div className="header__movies">
            <p>Фильмы</p>
            <p>Сохранённые фильмы</p>
          </div>
          <Link to="/profile" className="header__link-profile color_secondary">
            Акаунт
          </Link>
        </nav>
      ) : (
        <nav className="header__navigante text">
          <Link to="/sign-up" className="header__link">
            Регистрация
          </Link>
          <Link to="/sign-in" className="header__link color_primary">
            Войти
          </Link>
        </nav>
      )}
    </header>
  );
}

export default Header;
