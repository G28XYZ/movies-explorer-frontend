import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import { onRegister } from "../../services/actions/user";
import Input from "./Input";
import { isName, isPassword, isEmail } from "../../utils/validation";
import { useStore } from "../../services/StoreProvider";

function Register() {
  const [state, dispatch] = useStore();
  const { authMessage } = state;
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

    const haveSomeError = Object.keys(error).some(
      (key) => formData[key] === "" || errorMessage
    );
    setButtonProps({
      disabled: haveSomeError,
      className: haveSomeError ? "auth__submit_disabled" : "auth__submit",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(dispatch, formData).then((success) => {
      success && navigate("/movies");
    });
  };

  return (
    <div className="auth">
      <img src={logo} alt="Логотип" className="auth__logo" />
      <h2 className="auth__title">Добро пожаловать!</h2>
      <form className="auth__form" onSubmit={handleSubmit}>
        <div className="auth__input-container">
          <Input
            name="name"
            title="Имя"
            onChange={handleChange}
            error={error.name}
          />
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
        <span className="auth__message">{authMessage}</span>
        <button
          className={`${buttonProps.className} text`}
          disabled={buttonProps.disabled}
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
