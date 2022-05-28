import Header from "../Header";
import Main from "../Main";
import Movies from "../Movies";
import Footer from "../Footer";
import { useLocation, Routes, Route } from "react-router-dom";
import { Login, Register } from "../Auth";
import { useState } from "react";

function App() {
  const [isAuth, setIsAuth] = useState(true);

  const location = useLocation();
  const path = location.pathname;
  const onAuth = path === "/sign-in" || path === "/sign-up";
  return (
    <div className="page">
      {!onAuth && <Header isAuth={isAuth} />}
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<Register />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>

      {!onAuth && <Footer />}
    </div>
  );
}

export default App;
