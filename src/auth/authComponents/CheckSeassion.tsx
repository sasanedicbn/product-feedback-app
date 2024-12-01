import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../supabase/supabase";
import { setUser, clearUser } from "../../components/store/slices/userSlice";

const CheckSession = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const checkSession = async () => {
      const { data: session } = await supabase.auth.getSession();
      if (session?.session) {
        const { data: userDetails, error } = await supabase
          .from("Users")
          .select("user_image, full_name, user_name")
          .eq("id", session.session.user.id)
          .single();

        if (userDetails) {
          dispatch(setUser(userDetails));
        } else {
          console.error("Error fetching user details:", error);
          dispatch(clearUser());
          navigate("/login");
        }
      } else {
        dispatch(clearUser());
        navigate("/login");
      }
    };

    checkSession();
  }, [dispatch, navigate]);

  return children;
};

export default CheckSession;
