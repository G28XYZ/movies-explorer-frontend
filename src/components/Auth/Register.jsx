import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import { onRegister } from "../../services/actions/user";
import Input from "./Input";
import { isName, isPassword, isEmail } from "../../utils/validation";
import { useStore } from "../../services/StoreProvider";

function Register() {
  const [state, dispatch] = useStore();
  const { authMessage, loggedIn } = state;
  const [disabled, setDisabled] = useState(false);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState({ name: "", email: "", password: "" });
  const [buttonProps, setButtonProps] = useState({
    disabled: true,
    className: "auth__submit_disabled",
  });

  const handleChange = (e) => {
    let errorMessage = e.target.validationMessage;
    if (e.target.name === "email") {
      errorMessage = errorMessage || isEmail(e.target.value);
      setError({
        ...error,
        email: errorMessage,
      });
    } else if (e.target.name === "name") {
      errorMessage = errorMessage || isName(e.target.value);
      setError({
        ...error,
        name: errorMessage,
      });
    } else {
      errorMessage = errorMessage || isPassword(e.target.value);
      setError({
        ...error,
        password: errorMessage,
      });
    }

    setFormData({ ...formData, [e.target.name]: e.target.value });

    const haveSomeError = Object.keys(error).some((key) => formData[key] === "" || errorMessage);
    setButtonProps({
      disabled: haveSomeError,
      className: haveSomeError ? "auth__submit_disabled" : "auth__submit",
    });
  };

  useEffect(() => {
    loggedIn && navigate("/movies");
  }, [loggedIn, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisabled(true);
    setButtonProps({ disabled: true, className: "auth__submit_disabled" });
    onRegister(dispatch, formData).then(() => {
      setTimeout(() => {
        setDisabled(false);
        setButtonProps({ disabled: false, className: "auth__submit" });
      }, 2000);
    });
  };

  return (
    <div className="auth">
      <Link to="/" className="auth__logo">
        <img src={logo} alt="Логотип" />
      </Link>
      <h2 className="auth__title">Добро пожаловать!</h2>
      <form className="auth__form" onSubmit={handleSubmit}>
        <div className="auth__input-container">
          <Input
            type="text"
            name="name"
            title="Имя"
            onChange={handleChange}
            error={error.name}
            disabled={disabled}
          />
          <Input
            type="email"
            name="email"
            title="E-mail"
            onChange={handleChange}
            error={error.email}
            disabled={disabled}
          />
          <Input
            type="password"
            name="password"
            title="Пароль"
            onChange={handleChange}
            error={error.password}
            disabled={disabled}
          />
        </div>
        <span className="auth__message">{authMessage}</span>
        <button
          className={`${buttonProps.className} text`}
          disabled={disabled || buttonProps.disabled}
        >
          Зарегистрироваться
        </button>
      </form>
      <div className="auth__link-container">
        <p className="text color_text">Уже зарегестрированны?</p>
        <Link to="/sign-in" className="auth__link text">
          Войти
        </Link>
      </div>
    </div>
  );
}

export default Register;
