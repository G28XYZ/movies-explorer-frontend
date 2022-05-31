export const userReducer = (state, action) => {
  switch (action.type) {
    case "USER":
      console.log("user reducer", action);
      return { ...state, name: action.name };
    default:
      return false;
  }
};
