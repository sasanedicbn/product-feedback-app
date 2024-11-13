import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../../components/UX/Button";
import Input from "../../components/UX/Input";

const schema = z.object({
  email: z.string().email("Unesite validan email."),
  password: z.string().min(6, "Šifra mora imati najmanje 6 karaktera."),
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
      <div>
        <input
          type="email"
          placeholder="Email"
          {...register("email")}
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>
      
      <div>
        <input
          type="password"
          placeholder="Password"
          styleType="authForm"
          {...register("password")}
        />
        {errors.password && <p className="text-red-500">{errors.password.message}</p>}
      </div>
      
      <Button type="signUp">Sign Up</Button>
    </form>
  );
};

export default AuthForm;
