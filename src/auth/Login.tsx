import AuthForm from "./authComponents/AuthForm";
import ImageBackgorund from "./authComponents/ImageBackgorund";
import SocialSignIn from "./authComponents/SocialSignin";
import Title from "./authComponents/Title";


const Login = () => {
    return (
        <div className="flex h-screen">
           <ImageBackgorund/>
            <div className="w-1/2 flex flex-col justify-center items-center bg-gray-100 p-8">
                <Title />
                <AuthForm />
                <SocialSignIn />
            </div>
        </div>
    );
};

export default Login;
