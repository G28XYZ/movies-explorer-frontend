import React, { createContext, useReducer, useMemo, useContext } from "react";

import { userReducer } from "./reducers/user";
import { movieReducer } from "./reducers/movie";
import { toolTipReducer } from "./reducers/toolTip";

const globalState = {
  loggedIn: false,
  loading: false,
  authMessage: "",
  user: { name: "", email: "", _id: "" },
  movie: {
    moviesList: [],
    savedMovies: [],
    filterShortFilms: false,
    searchText: "",
    notFound: "",
    showedMovies: 0,
  },
  toolTip: { message: "", isOpen: false, success: true },
};

const GlobalContext = createContext(globalState);

const reducers = (state, action) => {
  return {
    ...state,
    ...[userReducer, movieReducer, toolTipReducer].reduce(
      (objState, reducer) => ({ ...objState, ...reducer(objState, action) }),
      state
    ),
  };
};

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducers, globalState);
  const contextValue = useMemo(() => [state, dispatch], [state, dispatch]);

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
}

export function useStore() {
  return useContext(GlobalContext);
}
