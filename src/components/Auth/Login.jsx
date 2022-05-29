import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import Input from "./Input";

function Login({ onLogin }) {
  const [error, setError] = useState({ email: "", password: "" });
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError({ ...error, [e.target.name]: e.target.validationMessage });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(formData);
  };

  return (
    <section className="auth">
      <img src={logo} alt="Логотип" className="auth__logo" />
      <h2 className="auth__title">Рады видеть!</h2>
      <form className="auth__form" onSubmit={handleSubmit}>
        <div className="auth__input-container">
          <Input
            type="email"
            name="email"
            title="E-mail"
            onChange={handleChange}
            error={error.email}
          />
          <Input
            type="password"
            name="password"
            title="Пароль"
            onChange={handleChange}
            error={error.password}
          />
        </div>
        <button className="auth__submit text">Войти</button>
        <div className="auth__link-container">
          <p className="text color_text">Ещё не зарегистрированы?</p>
          <Link to="/sign-up" className="auth__link text">
            Регистрация
          </Link>
        </div>
      </form>
    </section>
  );
}

export default Login;
