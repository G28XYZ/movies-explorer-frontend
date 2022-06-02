import { useState } from "react";
import { Link } from "react-router-dom";
import { logOut, updateUser } from "../../services/actions/user";
import { isName, isEmail } from "../../utils/validation";
import { useStore } from "../../services/StoreProvider";

function Profile() {
  const [state, dispatch] = useStore();
  const userInfo = state.user;
  const [userData, setUserData] = useState(Object.assign({}, userInfo));
  const [buttonProps, setButtonProps] = useState({
    disabled: true,
    className: "profile__submit_disabled",
  });

  function handleChange(e) {
    setUserData({ [e.target.name]: e.target.value });
    checkEdit();
  }

  function checkEdit() {
    console.log(userData);
    if (userInfo.name !== userData.name || userInfo.email !== userData.email) {
      if (!isName(userData.name) && !isEmail(userData.email)) {
        setButtonProps({ disabled: false, className: "profile__submit" });
      }
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    updateUser(dispatch, state.user);
  }

  function handleLogout() {
    logOut(dispatch);
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
            value={userData.name}
            onChange={handleChange}
          />
        </label>
        <label className="profile__label">
          <input
            name="email"
            type="text"
            className="profile__input"
            value={userData.email}
            onChange={handleChange}
          />
        </label>
        <button
          type="submit"
          className={`${buttonProps.className} text`}
          onClick={handleSubmit}
          disabled={buttonProps.disabled}
        >
          Редактировать
        </button>
      </form>
      <Link
        to="/sign-in"
        className="profile__logout link text"
        onClick={handleLogout}
      >
        Выйти из аккаунта
      </Link>
    </section>
  );
}

export default Profile;
