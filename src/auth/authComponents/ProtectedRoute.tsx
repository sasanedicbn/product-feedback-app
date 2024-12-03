import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import CheckSession from "./CheckSeassion";
import { RootState } from "../../components/store/store";

const ProtectedRoute = ({ children }: any) => {
  const currentUser = useSelector((state: RootState) => state.user.user);

  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  return <CheckSession>{children}</CheckSession>;
};

export default ProtectedRoute;
