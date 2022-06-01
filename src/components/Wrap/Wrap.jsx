import Header from "../Header";
import Footer from "../Footer";
import { useLocation } from "react-router-dom";

const Wrap = ({ children, header = true, footer = true }) => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <>
      {header && <Header />}
      {children}
      {path !== "/profile" && footer && <Footer />}
    </>
  );
};

export default Wrap;
