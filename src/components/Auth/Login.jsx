import { useState } from "react";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    console.log(e);
  };
  return (
    <section className="auth">
      <h2 className="auth__title">Вход</h2>
      <form className="auth__form" onSubmit={handleSubmit}>
        <div className="auth__input-container">
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="auth__input"
            onChange={handleChange}
          ></input>
          <input
            name="password"
            type="password"
            placeholder="Пароль"
            className="auth__input"
            onChange={handleChange}
          ></input>
        </div>
        <button className="auth__submit">Войти</button>
      </form>
    </section>
  );
}

export default Login;
