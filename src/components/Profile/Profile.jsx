import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useStore } from "../../services/StoreProvider";

function Profile({ handleUpdateUser }) {
  const [state, dispatch] = useStore();
  const userInfo = state.user;

  useEffect(() => {
    console.log(state);
  }, [state]);

  function handleChange(e) {
    dispatch({
      type: "UPDATE_USER",
      user: { [e.target.name]: e.target.value },
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleUpdateUser(userInfo);
  }

  return (
    <section className="profile">
      <h1 className="profile__title text_medium">Привет, {userInfo.name}!</h1>
      <form action="submit" className="profile__form text">
        <label className="profile__label underline-pb20">
          <input
            name="name"
            type="text"
            className="profile__input"
            value={userInfo.name}
            onChange={handleChange}
          />
        </label>
        <label className="profile__label">
          <input
            name="email"
            type="text"
            className="profile__input"
            value={userInfo.email}
            onChange={handleChange}
          />
        </label>
        <button
          type="submit"
          className="profile__submit link text"
          onClick={handleSubmit}
        >
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
