import "./Input.css";

function Input({ title, onChange, name, type = "text", error }) {
  const requiredProps = type === "text" ? { minLength: 2, maxLength: 30, required: true } : null;

  return (
    <label className="input-label text color_text">
      {title}
      <input
        name={name}
        type={type}
        className={`input ${error && "color_error"}`}
        onChange={onChange}
        {...requiredProps}
      ></input>
      <span className={`input-error ${error && "input-error_visible"} text`}>{error}</span>
    </label>
  );
}

export default Input;
