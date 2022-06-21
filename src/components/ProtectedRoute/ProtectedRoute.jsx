// Wrap - оборачивает элемент в хедер и футер
// по-умолчанию значения в true
import { Navigate, Outlet } from "react-router-dom";
import { useStore } from "../../services/StoreProvider";
import Wrap from "../Wrap";

const ProtectedRoute = ({ children, path }) => {
  const [state] = useStore();
  const { loggedIn } = state;
  return <Wrap>{loggedIn ? <Outlet /> : <Navigate to="/" />}</Wrap>;
};

export default ProtectedRoute;
