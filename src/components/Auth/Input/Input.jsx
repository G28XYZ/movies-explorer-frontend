import { useState } from "react";

function Input({ title, onChange, name, type = "text", error }) {
  const requiredProps =
    type === "text" ? { minLength: 2, maxLength: 30, required: true } : null;

  return (
    <label className="auth__input-label text color_text">
      {title}
      <input
        name={name}
        type={type}
        className={`auth__input ${error && "color_error"}`}
        onChange={onChange}
        {...requiredProps}
      ></input>
      <span className={`auth__error ${error && "auth__error_visible"} text`}>
        {error}
      </span>
    </label>
  );
}

export default Input;
