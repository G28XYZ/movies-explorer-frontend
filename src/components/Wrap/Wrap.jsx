import Header from "../Header";
import Footer from "../Footer";
import { useLocation } from "react-router-dom";

const Wrap = ({ children, header = true, footer = true, loggedIn }) => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <>
      {header && <Header loggedIn={loggedIn} />}
      {children}
      {path !== "/profile" && footer && <Footer />}
    </>
  );
};

export default Wrap;
