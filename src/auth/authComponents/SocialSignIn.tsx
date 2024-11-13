import React from 'react';
import { FaGoogle, FaFacebook, FaInstagram } from 'react-icons/fa';

const SocialSignIn = () => {
    return (
        <div className="flex flex-col items-center mt-6 w-3/4">
            <div className="flex items-center w-full my-4">
                <hr className="flex-grow border-gray-300" />
                <span className="mx-2 text-gray-500">or sign in with</span>
                <hr className="flex-grow border-gray-300" />
            </div>
            <div className="flex gap-4">
                <button className="p-2 rounded-full border border-gray-300 text-gray-500 hover:text-red-400">
                    <FaGoogle className="w-6 h-6" />
                </button>
                <button className="p-2 rounded-full border border-gray-300 text-gray-500 hover:text-blue-600">
                    <FaFacebook className="w-6 h-6" />
                </button>
                <button className="p-2 rounded-full border border-gray-300 text-gray-500 hover:text-pink-500">
                    <FaInstagram className="w-6 h-6" />
                </button>
            </div>
        </div>
    );
};

export default SocialSignIn;
