import { HiChevronDown, HiChevronUp, HiLightBulb, HiPlus } from "react-icons/hi";
import { IconProps } from "../types/types";
import { FaArrowLeft, FaCheck, FaRegComment } from "react-icons/fa";

const Icon = ({ name, size = 84, color = 'black', onClick= () => {}}:IconProps) => {

  const icons = {
    suggestion:  <HiLightBulb size={size} color={color} onClick={onClick} />, 
    plus: <HiPlus size={size} color={color} onClick={onClick} />,
    down: <HiChevronDown size={size} color={color} onClick={onClick}/>,
    up: <HiChevronUp size={size} color={color} onClick={onClick}/>,
    check: <FaCheck size={size} color={color} onClick={onClick}/>,
    message: <FaRegComment size={size} color={color} onClick={onClick}/>,
    back:  <FaArrowLeft size={size} color={color} onClick={onClick}/>,
  };

  return icons[name] || null;
};

export default Icon;