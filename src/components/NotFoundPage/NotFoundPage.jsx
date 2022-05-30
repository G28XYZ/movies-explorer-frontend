import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  function handleClickBack() {
    navigate(-1);
  }

  return (
    <section className="error">
      <h1 className="error__title">404</h1>
      <p className="error__message text">Страница не найдена</p>
      <button className="error__button link" onClick={handleClickBack}>
        Назад
      </button>
    </section>
  );
};

export default NotFoundPage;
