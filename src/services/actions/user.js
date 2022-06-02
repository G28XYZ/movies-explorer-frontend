import mainApi from "../../utils/api/mainApi";
import auth from "../../utils/api/auth";
import { resMessages } from "../../utils/constants";
import { CLOSE_TOOL_TIP } from "./toolTip";

export const AUTH_USER = "SET_USER";
export const UPDATE_USER = "UPDATE_USER";
export const LOGIN_USER = "LOGIN_USER";
export const LOGIN_USER_FAILD = "LOGIN_USER_FAILD";
export const REGISTER_USER = "REGISTER_USER";
export const LOGOUT = "LOGOUT";

export const updateUser = (dispatch, body) => {
  mainApi
    .updateUser(body)
    .then((data) => {
      dispatch({ type: UPDATE_USER, user: data });
    })
    .catch((err) => {});
};

export const onLogin = (dispatch, body) => {
  return auth
    .login(body)
    .then(({ token }) => {
      dispatch({ type: LOGIN_USER });
      setTimeout(() => {
        dispatch({ type: CLOSE_TOOL_TIP });
      }, 5000);
      return true;
    })
    .catch((statusCode) => {
      dispatch({ type: LOGIN_USER_FAILD, message: resMessages[statusCode] });
      setTimeout(() => {
        dispatch({ type: LOGIN_USER_FAILD, message: "" });
      }, 10000);
      return false;
    });
};

export const logOut = (dispatch) => {
  auth
    .logout()
    .then((res) => {
      console.log(res);
      dispatch({ type: LOGOUT });
    })
    .catch(console.log);
};

export const onRegister = (dispatch, { name, email, password }) => {
  console.log(name, email, password);

  return auth
    .registration({ name, email, password })
    .then(() => {
      dispatch({ type: REGISTER_USER });
      onLogin(dispatch, { name, password });
      return true;
    })
    .catch((statusCode) => {
      dispatch({ type: LOGIN_USER_FAILD, message: resMessages[statusCode] });
      setTimeout(() => {
        dispatch({ type: LOGIN_USER_FAILD, message: "" });
      }, 10000);
      return false;
    });
};

export const getUser = (dispatch) => {
  auth
    .authentication()
    .then((user) => {
      dispatch({ type: AUTH_USER, user });
    })
    .catch(() => console.log("Пользователь не авторизован."));
};
