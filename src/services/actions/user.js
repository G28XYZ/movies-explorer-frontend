import api from "../../utils/api";
import auth from "../../utils/auth";

export const AUTH_USER = "SET_USER";
export const UPDATE_USER = "UPDATE_USER";
export const LOGIN_USER = "LOGIN_USER";
export const REGISTER_USER = "REGISTER_USER";

export const updateUser = (dispatch, body) => {
  api
    .updateUser(body)
    .then((data) => {
      dispatch({ type: UPDATE_USER, user: data });
      // setInfoTooltip({
      //   message: `Вы успешно изменили свои данные!`,
      //   isOpen: true,
      //   success: true,
      // });
    })
    .catch((err) => {
      // setInfoTooltip({
      //   message: `Ошибка редактирования пользователя! ${err}`,
      //   isOpen: true,
      //   success: false,
      // });
    });
};

export const onLogin = (dispatch, body, state) => {
  auth
    .login(body)
    .then(({ token }) => {
      dispatch({ type: LOGIN_USER, auth: true });
      localStorage.setItem("jwt", token);
      auth.setDevCookie();
      return true;
      // setInfoTooltip({
      //   message: `Вы успешно изменили свои данные!`,
      //   isOpen: true,
      //   success: true,
      // });
    })
    .catch((err) => {
      dispatch({ type: LOGIN_USER, user: state.user, auth: false });
      // setInfoTooltip({
      //   message: `Ошибка редактирования пользователя! ${err}`,
      //   isOpen: true,
      //   success: false,
      // });
      return false;
    });
};

export const onRegister = (dispatch, body) => {
  auth
    .registration(body)
    .then((data) => {
      console.log(data);
      // setInfoTooltip({
      //   message: `Вы успешно изменили свои данные!`,
      //   isOpen: true,
      //   success: true,
      // });
    })
    .catch((err) => {
      console.log(err);
      // setInfoTooltip({
      //   message: `Ошибка редактирования пользователя! ${err}`,
      //   isOpen: true,
      //   success: false,
      // });
    });
};

export const getUser = (dispatch) => {
  auth
    .authentication()
    .then((user) => {
      console.log(user);
      dispatch({ type: AUTH_USER, user });
    })
    .catch(console.log);
};
