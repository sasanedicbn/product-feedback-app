import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "../../supabase/supabaseFunctions";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { setUser } from "../../components/store/slices/userSlice";
import { useNavigate } from "react-router-dom";

const schema = z.object({
  email: z.string().email("Your email is not correct."),
  password: z.string().min(6, "Password must have at least 6 characters."),
});

type FormData = z.infer<typeof schema>;

const AuthForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const signUpHandler: SubmitHandler<FormData> = async (credentials) => {
    if (credentials.email && credentials.password) {
      try {
        const data = await signIn(credentials); 
        if (data) {
          dispatch(setUser(data.users)); 
          navigate("/");
        } else {
          toast.error("Invalid credentials, please try again!");
        }
      } catch (error) {
        console.error("Error during sign in:", error);
        toast.error("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(signUpHandler)} className="flex flex-col gap-4 w-3/4">
      <input
        type="email"
        placeholder="Email"
        className="border p-2 rounded-md"
        {...register("email")}
      />
      {errors.email && <p className="text-red-500">{errors.email.message}</p>}

      <input
        type="password"
        placeholder="Password"
        className="border p-2 rounded-md"
        {...register("password")}
      />
      {errors.password && <p className="text-red-500">{errors.password.message}</p>}

      <button type="submit" className="bg-blue-500 text-white py-2 rounded-md mt-4">
        Sign Up
      </button>
    </form>
  );
};

export default AuthForm;
