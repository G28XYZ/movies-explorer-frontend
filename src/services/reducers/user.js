import { UPDATE_USER, LOGIN_USER, AUTH_USER, LOGOUT } from "../actions/user";

export const userReducer = (state, action) => {
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state,
        user: { ...state.user, ...action.user },
        loggedIn: true,
      };

    case LOGIN_USER:
      return {
        ...state,
        loggedIn: action.auth,
      };

    case LOGOUT:
      return {
        ...state,
        loggedIn: false,
        user: { _id: "", name: "", email: "" },
      };

    case UPDATE_USER:
      return { ...state, user: { ...state.user, ...action.user } };

    default:
      return state;
  }
};
