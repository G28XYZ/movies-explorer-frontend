// Wrap - оборачивает элемент в хедер и футер
// по-умолчанию значения в true
import { Navigate } from "react-router-dom";
import Wrap from "../Wrap";

const ProtectedRoute = ({ children, loggedIn }) => {
  return <Wrap loggedIn={loggedIn}>{loggedIn ? children : <Navigate to="/sign-in" />}</Wrap>;
};

export default ProtectedRoute;
