import {
  HiChevronDown,
  HiChevronUp,
  HiLightBulb,
  HiPlus,
} from "react-icons/hi";
import { IconProps } from "../types/types";
import { FaArrowLeft, FaCheck, FaRegComment } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Icon = ({
  name,
  size = 84,
  color = "black",
  onClick = () => {},
  className = "",
}: IconProps) => {
  const icons = {
    suggestion: (
      <HiLightBulb
        size={size}
        color={color}
        onClick={onClick}
        className={className}
      />
    ),
    plus: <HiPlus size={size} color={color} onClick={onClick} />,
    down: <HiChevronDown size={size} color={color} onClick={onClick} />,
    up: <HiChevronUp size={size} color={color} onClick={onClick} />,
    check: <FaCheck size={size} color={color} onClick={onClick} />,
    message: <FaRegComment size={size} color={color} onClick={onClick} />,
    back: <FaArrowLeft size={size} color={color} onClick={onClick} />,
    search: <FiSearch size={size} color={color} onClick={onClick} />,
    menuBurger: (
      <AiOutlineMenu
        size={size}
        color={color}
        onClick={onClick}
        className={className}
      />
    ),
    close: (
      <AiOutlineClose
        size={size}
        color={color}
        onClick={onClick}
        className={className}
      />
    ),
  };

  return icons[name as keyof typeof icons] || null;
};

export default Icon;
