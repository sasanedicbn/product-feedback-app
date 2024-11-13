import { FaGoogle, FaFacebook, FaInstagram } from 'react-icons/fa';
import Button from '../../components/UX/Button';

const SocialSignIn = () => {
    return (
        <div className="flex flex-col items-center mt-6 w-3/4">
            <div className="flex items-center w-full my-4">
                <hr className="flex-grow border-gray-300" />
                <span className="mx-2 text-gray-500">or sign in with</span>
                <hr className="flex-grow border-gray-300" />
            </div>
            <div className="flex gap-4">
                <Button type='iconLogIn'>
                    <FaGoogle className="w-6 h-6 hover:text-red-400" />
                </Button>
                <Button type='iconLogIn'>
                    <FaFacebook className="w-6 h-6 hover:text-blue-600" />
                </Button>
                <Button type="iconLogIn">
                    <FaInstagram className="w-6 h-6 hover:text-pink-500" />
                </Button>
            </div>
        </div>
    );
};

export default SocialSignIn;
