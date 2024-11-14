import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { signIn } from "../../supabase/supabaseFunctions";

const schema = z.object({
  email: z.string().email("Your email is not correct."),
  password: z.string().min(6, "Password must have least 6 characters."),
});

const AuthForm = () => {
  const [credentials, setCredentials] = useState('');
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  const signUpHandler = async () => {
    if (credentials.email && credentials.password) {
      const data = await signIn(credentials);
      if (data) {
        console.log(data)
      } else {
      }
    }
  };

  const onSubmit = (data) => {
    setCredentials(data);  
    signUpHandler();       
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
      
      <button type="submit" className="bg-blue-500 text-white py-2 rounded-md mt-4">Sign Up</button> 
    </form>
  );
};

export default AuthForm;
