import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../images/logo.svg";
import { onLogin } from "../../services/actions/user";
import { useStore } from "../../services/StoreProvider";
import Input from "./Input";
import { isPassword, isEmail } from "../../utils/validation";

function Login() {
  const [state, dispatch] = useStore();
  const { authMessage } = state;
  const { loggedIn } = state;
  const [disabled, setDisabled] = useState(false);

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
    onLogin(dispatch, formData, state).then(() => {
      setTimeout(() => {
        setDisabled(false);
        setButtonProps({ disabled: false, className: "auth__submit" });
      }, 2000);
    });
  };

  return (
    <section className="auth">
      <Link to="/" className="auth__logo">
        <img src={logo} alt="??????????????" />
      </Link>
      <h2 className="auth__title">???????? ????????????!</h2>
      <form className="auth__form" onSubmit={handleSubmit}>
        <div className="auth__input-container">
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
            title="????????????"
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
          ??????????
        </button>
        <div className="auth__link-container">
          <p className="text color_text">?????? ???? ?????????????????????????????????</p>
          <Link to="/sign-up" className="auth__link text">
            ??????????????????????
          </Link>
        </div>
      </form>
    </section>
  );
}

export default Login;
