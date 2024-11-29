import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import CheckSession from "./CheckSeassion";

const ProtectedRoute = ({ children }) => {
  const currentUser = useSelector((state) => state.user.user);

  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  return <CheckSession>{children}</CheckSession>;
};

export default ProtectedRoute;
