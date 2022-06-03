import { useEffect } from "react";
import Wrap from "../Wrap";

import Main from "../Main";
import Movies from "../Movies";
import { Routes, Route } from "react-router-dom";
import { Login, Register } from "../Auth";

import SavedMovies from "../SavedMovies";
import Profile from "../Profile/Profile";
import NotFoundPage from "../NotFoundPage";
import InfoToolTip from "../InfoToolTip/InfoToolTip";

import ProtectedRoute from "../ProtectedRoute";

import { useStore } from "../../services/StoreProvider";
import { getUser } from "../../services/actions/user";
import { CLOSE_TOOL_TIP } from "../../services/actions/toolTip";
import { getSavedMovies } from "../../services/actions/savedMovies";

function App() {
  const [state, dispatch] = useStore();
  const { loggedIn } = state;

  useEffect(() => {
    getUser(dispatch);
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
            <ProtectedRoute>
              <Movies />
            </ProtectedRoute>
          }
        />
        <Route
          path="/saved-movies"
          element={
            <ProtectedRoute>
              <SavedMovies />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<Register />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <InfoToolTip />
    </div>
  );
}

export default App;
