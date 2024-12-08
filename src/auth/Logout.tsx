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
      className=" text-sm mt-1 text-blue-600 cursor-pointer md:mt-4"
    >
      Log out
    </p>
  );
};

export default Logout;
