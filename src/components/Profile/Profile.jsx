import { Link } from "react-router-dom";

function Profile() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <section className="profile">
      <h1 className="profile__title text_medium">Привет, Александр!</h1>
      <form action="submit" className="profile__form text">
        <label className="profile__label underline-pb20">
          <input type="text" className="profile__input" value="Александр" />
        </label>
        <label className="profile__label">
          <input type="text" className="profile__input" value="test@test.com" />
        </label>
        <button type="submit" className="profile__submit link text" onClick={handleSubmit}>
          Редактировать
        </button>
      </form>
      <Link to="/sign-in" className="profile__logout link text">
        Выйти из аккаунта
      </Link>
    </section>
  );
}

export default Profile;
