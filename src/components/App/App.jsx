import { useEffect, useState } from "react";
import Wrap from "../Wrap";

import Main from "../Main";
import Movies from "../Movies";
import { Routes, Route } from "react-router-dom";
import { Login, Register } from "../Auth";

import api from "../../utils/api";
import auth from "../../utils/auth";

import SavedMovies from "../SavedMovies";
import Profile from "../Profile/Profile";
import NotFoundPage from "../NotFoundPage";
import InfoToolTip from "../InfoToolTip/InfoToolTip";

import ProtectedRoute from "../ProtectedRoute";

import { useStore } from "../../services/StoreProvider";

function App() {
  const [state, dispatch] = useStore();

  const [loggedIn, setLoggedIn] = useState(true);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({ name: "", email: "" });

  const [favoriteMovies, setFavoriteMOvies] = useState([]);
  const [moviesList, setMoviesList] = useState([]);

  const [infoToolTip, setInfoTooltip] = useState({
    message: "",
    isOpen: false,
    success: false,
  });

  useEffect(() => {
    console.log(state);
    dispatch({});
    api
      .getMovies()
      .then((movies) => {
        setMoviesList(movies);
        setFavoriteMOvies(movies.slice(0, 3));
        setTimeout(() => setLoading(false), 2000);
      })
      .catch((err) => {
        setInfoTooltip({
          message: `Ошибка в запросе фильмов! ${err}`,
          isOpen: true,
          success: false,
        });
      });
  }, []);

  function onClosePopup() {
    setInfoTooltip({ ...infoToolTip, isOpen: false });
  }

  function handleUpdateUser(body) {
    api
      .updateUser(body)
      .then((data) => {
        setUser({ ...user, ...data });
        setInfoTooltip({
          message: `Вы успешно изменили свои данные!`,
          isOpen: true,
          success: true,
        });
      })
      .catch((err) => {
        setInfoTooltip({
          message: `Ошибка редактирования пользователя! ${err}`,
          isOpen: true,
          success: false,
        });
      });
  }

  function onLogin(body) {
    return auth
      .login(body)
      .then(({ token }) => {
        setLoggedIn(true);
        setInfoTooltip({
          message: "Вы успешно вошли!",
          isOpen: true,
          success: true,
        });
        return true;
      })
      .catch((err) => {
        setInfoTooltip({
          message: `Ошибка авторизации! ${err}`,
          isOpen: true,
          success: false,
        });
        return false;
      });
  }

  function onRegister(body) {
    return auth
      .registration(body)
      .then((data) => {
        setUser({ ...user, ...data });
        setInfoTooltip({
          message: "Вы успешно зарегистрировались!",
          isOpen: true,
          success: true,
        });
        return true;
      })
      .catch((err) => {
        setInfoTooltip({
          message: `Ошибка регистрации! ${err}`,
          isOpen: true,
          success: false,
        });
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
            <Wrap>
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
              <Profile user={user} handleUpdateUser={handleUpdateUser} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/sign-in"
          element={<Login onLogin={onLogin} success={infoToolTip.success} />}
        />
        <Route
          path="/sign-up"
          element={<Register onRegister={onRegister} success={infoToolTip.success} />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <InfoToolTip onClose={onClosePopup} infoToolTip={infoToolTip} />
    </div>
  );
}

export default App;
