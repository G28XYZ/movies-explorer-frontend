import { useEffect, useLayoutEffect } from "react";
import Wrap from "../Wrap";

import Main from "../Main";
import Movies from "../Movies";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { Login, Register } from "../Auth";

import SavedMovies from "../SavedMovies";
import Profile from "../Profile/Profile";
import NotFoundPage from "../NotFoundPage";
import InfoToolTip from "../Modal/InfoToolTip";
import Modal from "../Modal";

import ProtectedRoute from "../ProtectedRoute";

import { useStore } from "../../services/StoreProvider";
import { getUser } from "../../services/actions/user";
import { CLOSE_TOOL_TIP } from "../../services/actions/toolTip";
import { getSavedMovies } from "../../services/actions/savedMovies";
import { SET_STATE_MAIN_MOVIES } from "../../services/actions/mainMovies";

function App() {
  const [state, dispatch] = useStore();
  const { loggedIn } = state;
  const location = useLocation();
  const navigate = useNavigate();

  function checkDataInStorage() {
    const moviesLocalState = JSON.parse(localStorage.getItem("moviesLocalState"));
    if (moviesLocalState) {
      dispatch({ type: SET_STATE_MAIN_MOVIES, mainMovie: moviesLocalState });
    }
  }

  useLayoutEffect(() => {
    getUser(dispatch).then((success) => {
      if (success) {
        navigate(location.pathname);
      }
    });
    if (loggedIn) {
      checkDataInStorage();
    }
  }, [loggedIn]);

  useEffect(() => {
    if (loggedIn) {
      getSavedMovies(dispatch);
    }
  }, [dispatch, loggedIn]);

  useEffect(() => {
    if (state.toolTip.isOpen) {
      setTimeout(() => {
        dispatch({ type: CLOSE_TOOL_TIP });
      }, 5000);
    }
  }, [dispatch, state.toolTip.isOpen]);

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
            <ProtectedRoute path="/movies">
              <Movies />
            </ProtectedRoute>
          }
        />
        <Route
          path="/saved-movies"
          element={
            <ProtectedRoute path="/saved-movies">
              <SavedMovies />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute path="/profile">
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<Register />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {state.toolTip.isOpen && (
        <Modal>
          <InfoToolTip />
        </Modal>
      )}
    </div>
  );
}

export default App;
