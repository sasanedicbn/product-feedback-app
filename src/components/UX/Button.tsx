import { ButtonProps } from "../types/types";

const Button = ({ type, children, onClick, disabled = false }: ButtonProps) => {
  const base = " py-2.5 px-5 text-center no-underline cursor-pointer ";

  const styles = {
    login: `${base} w-full bg-blue-500 text-white hover:bg-blue-600 mt-2 rounded-lg transition-all duration-300`,
    addFeedBack: `${base}  text-white flex items-center bg-purple-500 rounded-lg hover:bg-purple-600 transition-all duration-300 py-1.5  sm:py-2.5 `,
    cancelFeedBack: `${base} w-[86px] text-white flex items-center bg-blue-900 rounded-lg hover:bg-blue-800 transition-all duration-300`,
    editFeedBack: `${base}  text-gray-100 flex items-center bg-blue-500 rounded-lg hover:bg-blue-800 transition-all duration-300 `,
    replay: `text-blue-600 font-semibold hover:text-blue-800 transition duration-150 text-sm`,
    iconSignUp: `p-2 rounded-full border border-gray-300 text-gray-500`,
  };

  return (
    <button className={styles[type]} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
