import { inputPT } from "../../../utils/propTypes";
import "./Input.css";

function Input({ title, onChange, name, type, error, disabled }) {
  const requiredProps =
    type === "text"
      ? { minLength: 2, maxLength: 30 }
      : type === "password"
      ? { minLength: 3 }
      : null;

  return (
    <label className="input-label text color_text">
      {title}
      <input
        name={name}
        type={type}
        className={`input ${error && "color_error"}`}
        onChange={onChange}
        disabled={disabled}
        required
        {...requiredProps}
      ></input>
      <span className={`input-error ${error && "input-error_visible"} text`}>{error}</span>
    </label>
  );
}

Input.propTypes = inputPT;

export default Input;
