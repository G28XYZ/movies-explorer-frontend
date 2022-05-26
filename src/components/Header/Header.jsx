import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Логотип" />
      <nav className="header__links text">
        <Link to="/sign-up" className="header__link">
          Регистрация
        </Link>
        <Link to="/sign-in" className="header__link color_primary">
          Войти
        </Link>
      </nav>
    </header>
  );
}

export default Header;
