// Wrap - оборачивает элемент в хедер и футер
// по-умолчанию значения в true
import { Navigate } from "react-router-dom";
import { useStore } from "../../services/StoreProvider";
import Wrap from "../Wrap";

const ProtectedRoute = ({ children }) => {
  const [state] = useStore();
  const { loggedIn } = state;
  return <Wrap>{loggedIn ? children : <Navigate to="/sign-in" />}</Wrap>;
};

export default ProtectedRoute;
