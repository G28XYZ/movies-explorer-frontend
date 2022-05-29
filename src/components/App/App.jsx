import { useEffect, useState } from "react";

import Header from "../Header";
import Main from "../Main";
import Movies from "../Movies";
import Footer from "../Footer";
import { Routes, Route } from "react-router-dom";
import { Login, Register } from "../Auth";

import api from "../../utils/api";
import SavedMovies from "../SavedMovies";
import Profile from "../Profile/Profile";
import NotFoundPage from "../NotFoundPage";

function App() {
  const [isAuth, setIsAuth] = useState(true);
  const [loading, setLoading] = useState(false);
  const [favoriteMovies, setFavoriteMOvies] = useState([]);

  const [moviesList, setMoviesList] = useState([]);

  const Wrap = ({ children, header = true, footer = true }) => {
    return (
      <>
        {header && <Header isAuth={isAuth} />}
        {children}
        {footer && <Footer />}
      </>
    );
  };

  useEffect(() => {
    setLoading(true);
    api
      .getMovies()
      .then((movies) => {
        setMoviesList(movies);
        setFavoriteMOvies(movies.slice(0, 3));
        setTimeout(() => setLoading(false), 2000);
      })
      .catch(console.log);
  }, []);

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
            <Wrap>
              <Movies moviesList={moviesList} loading={loading} />
            </Wrap>
          }
        />
        <Route
          path="/saved-movies"
          element={
            <Wrap>
              <SavedMovies moviesList={favoriteMovies} />
            </Wrap>
          }
        />
        <Route
          path="/profile"
          element={
            <Wrap footer={false}>
              <Profile />
            </Wrap>
          }
        />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<Register />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
