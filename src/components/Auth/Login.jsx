import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../images/logo.svg";
import { onLogin } from "../../services/actions/user";
import { useStore } from "../../services/StoreProvider";
import Input from "./Input";
import { isPassword, isEmail } from "../../utils/validation";

function Login() {
  const [state, dispatch] = useStore();
  const { loggedIn } = state;
  const [error, setError] = useState({ email: "", password: "" });
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [buttonProps, setButtonProps] = useState({
    disabled: true,
    className: "auth__submit_disabled",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    let errorMessage = e.target.validationMessage;
    if (e.target.name === "email") {
      errorMessage = errorMessage || isEmail(e.target.value);
      setError({
        ...error,
        email: errorMessage,
      });
    } else {
      errorMessage = errorMessage || isPassword(e.target.value);
      setError({
        ...error,
        password: errorMessage,
      });
    }

    setFormData({ ...formData, [e.target.name]: e.target.value });
    const haveSomeError = Object.keys(error).some(
      (key) => formData[key] === "" || errorMessage
    );
    setButtonProps({
      disabled: haveSomeError,
      className: haveSomeError ? "auth__submit_disabled" : "auth__submit",
    });
  };

  useEffect(() => {
    loggedIn && navigate(-1);
  }, [loggedIn, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(dispatch, formData, state).then(
      (success) => success && navigate("/movies")
    );
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
        <button
          className={`${buttonProps.className} text`}
          disabled={buttonProps.disabled}
        >
          Войти
        </button>
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
