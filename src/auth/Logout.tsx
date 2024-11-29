import { useDispatch } from "react-redux";
import { clearUser } from "../components/store/slices/userSlice";
import { supabase } from "../supabase/supabase";

const Logout = () => {
  const dispatch = useDispatch();
  const LogoutHandler = async () => {
    await supabase.auth.signOut();
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
