import { useDispatch } from "react-redux";
import { clearUser } from "../components/store/slices/userSlice";

const Logout = () => {
  const dispatch = useDispatch();
  const LogoutHandler = () => {
    dispatch(clearUser());
  };
  return (
    <p
      onClick={LogoutHandler}
      className=" text-sm mt-4 text-blue-600 cursor-pointer"
    >
      Log out
    </p>
  );
};

export default Logout;
