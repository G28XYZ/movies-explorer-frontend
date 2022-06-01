import { useEffect, useState } from "react";
import Wrap from "../Wrap";

import Main from "../Main";
import Movies from "../Movies";
import { Routes, Route } from "react-router-dom";
import { Login, Register } from "../Auth";

import auth from "../../utils/auth";

import SavedMovies from "../SavedMovies";
import Profile from "../Profile/Profile";
import NotFoundPage from "../NotFoundPage";
import InfoToolTip from "../InfoToolTip/InfoToolTip";

import ProtectedRoute from "../ProtectedRoute";

import { useStore } from "../../services/StoreProvider";
import { getMovies } from "../../services/actions/movie";
import { CLOSE_TOOL_TIP } from "../../services/actions/toolTip";
import { getUser } from "../../services/actions/user";

function App() {
  const [state, dispatch] = useStore();
  const { loading, loggedIn } = state;
  const { moviesList, favoriteMovies } = state.movie;
  const [user, setUser] = useState({ name: "", email: "" });

  const infoToolTip = state.toolTip;

  useEffect(() => {
    getMovies(dispatch);
    getUser(dispatch);
  }, [dispatch]);

  function onClosePopup() {
    dispatch({ type: CLOSE_TOOL_TIP });
  }

  function onLogin(body) {
    return auth
      .login(body)
      .then(({ token }) => {
        return true;
      })
      .catch((err) => {
        return false;
      });
  }

  function onRegister(body) {
    return auth
      .registration(body)
      .then((data) => {
        setUser({ ...user, ...data });

        return true;
      })
      .catch((err) => {
        return false;
      });
  }

  const MoviesProps = {
    moviesList,
    loading,
  };

  return (
    <div className="page">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Wrap loggedIn={loggedIn}>
              <Main />
            </Wrap>
          }
        />
        <Route
          path="/movies"
          element={
            <ProtectedRoute loggedIn={loggedIn}>
              <Movies {...MoviesProps} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/saved-movies"
          element={
            <ProtectedRoute loggedIn={loggedIn}>
              <SavedMovies moviesList={favoriteMovies} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute loggedIn={loggedIn}>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/sign-in"
          element={<Login onLogin={onLogin} success={infoToolTip.success} />}
        />
        <Route
          path="/sign-up"
          element={
            <Register onRegister={onRegister} success={infoToolTip.success} />
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <InfoToolTip onClose={onClosePopup} infoToolTip={infoToolTip} />
    </div>
  );
}

export default App;
