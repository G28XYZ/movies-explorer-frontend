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
import { CLOSE_TOOL_TIP } from "../../services/actions/toolTip";
import { getUser } from "../../services/actions/user";

function App() {
  const [state, dispatch] = useStore();
  const { loading, loggedIn } = state;

  const infoToolTip = state.toolTip;

  useEffect(() => {
    getUser(dispatch);
  }, [dispatch]);

  function onClosePopup() {
    dispatch({ type: CLOSE_TOOL_TIP });
  }

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
              <Movies />
            </ProtectedRoute>
          }
        />
        <Route
          path="/saved-movies"
          element={
            <ProtectedRoute loggedIn={loggedIn}>
              <SavedMovies />
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
          element={<Login success={infoToolTip.success} />}
        />
        <Route
          path="/sign-up"
          element={<Register success={infoToolTip.success} />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <InfoToolTip onClose={onClosePopup} infoToolTip={infoToolTip} />
    </div>
  );
}

export default App;
