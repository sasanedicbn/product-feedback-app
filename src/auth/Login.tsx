import AuthForm from "./authComponents/AuthForm";
import ImageBackgorund from "./authComponents/ImageBackgorund";
import SocialSignIn from "./authComponents/SocialSignIn";
import Title from "./authComponents/Title";

const Login = () => {
  return (
    <div className="flex h-screen">
      <ImageBackgorund />
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-gray-100 p-4">
        <Title />
        <AuthForm />
        <SocialSignIn />
      </div>
    </div>
  );
};

export default Login;
