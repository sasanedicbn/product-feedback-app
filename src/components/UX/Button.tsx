import { ButtonProps } from "../types/types";

const Button = ({ type, children, onClick, disabled = false }:ButtonProps) => {
    const base = 'w-full py-2.5 px-5 text-center no-underline cursor-pointer ';

    const styles = {
        login: `${base} bg-blue-500 text-white hover:bg-blue-600 mt-2 rounded-lg transition-all duration-300`,
        addFeedBack: `${base} w-36 text-white flex items-center bg-purple-500 rounded-lg hover:bg-purple-600 transition-all duration-300`,
        cancelFeedBack: `${base} w-[86px] text-white flex items-center bg-blue-900 rounded-lg hover:bg-blue-800 transition-all duration-300`
    };
    

    return (
        <button
            className={styles[type]}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;