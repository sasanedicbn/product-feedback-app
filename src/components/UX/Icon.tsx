import { HiChevronDown, HiChevronUp, HiLightBulb, HiPlus } from "react-icons/hi";
import { IconProps } from "../types/types";

const Icon = ({ name, size = 84, color = 'black', onClick= () => {}, type = 'none' }) => {
  const style = {
    cursor: type === 'pointer' ? 'pointer' : 'default',
  };

  const icons = {
    suggestion:  <HiLightBulb size={size} color={color} onClick={onClick} />, 
    plus: <HiPlus size={size} color={color} onClick={onClick} />,
    down: <HiChevronDown size={size} color={color} onClick={onClick}/>,
    up: <HiChevronUp size={size} color={color} onClick={onClick}/>
  };

  return icons[name] || null;
};

export default Icon;