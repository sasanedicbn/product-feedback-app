import Button from "../../components/UX/Button";
import Input from "../../components/UX/Input";

const AuthForm = () => {
    return (
        <form className="flex flex-col gap-4 w-3/4">
            <Input
                type="email"
                placeholder="Email"
                styleType="authForm"
            />
            <Input
                type="password"
                placeholder="Password"
                styleType="authForm"
            />
            <Button type="signUp">
                Sign Up
            </Button>
        </form>
    );
};

export default AuthForm;
