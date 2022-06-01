import React, { createContext, useReducer, useMemo, useContext } from "react";
import { userState } from "./state/user";
import { movieState } from "./state/movie";
import { userReducer } from "./reducers/user";
import { movieReducer } from "./reducers/movie";

const globalState = {
  loading: true,
  user: { ...userState },
  movie: { ...movieState },
};

const GlobalContext = createContext(globalState);

const reducers = (state, action) => {
  return {
    ...state,
    ...[userReducer, movieReducer].reduce(
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
