import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../../components/UX/Button";

const schema = z.object({
  email: z.string().email("Your email is not correct."),
  password: z.string().min(6, "Password must have least 6 characters."),
});

const AuthForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data, 'data iz forme');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 w-3/4">
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
      <Button onClick={() => {}} type="signUp">Sign Up</Button>
    </form>
  );
};

export default AuthForm;
