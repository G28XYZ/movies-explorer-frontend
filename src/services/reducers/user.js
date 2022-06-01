import { SET_USER, UPDATE_USER } from "../actions/user";

export const userReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_USER:
      return { ...state, user: { ...state.user, ...action.user } };
    default:
      return state;
  }
};
