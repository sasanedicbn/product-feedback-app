import { ActionProps } from "../types/types";
import Icon from "./Icon";
import Label from "./Label";


const Action = ({ iconName, iconColor, iconSize, text, onClick }:ActionProps) => {
    return (
        <div className="flex items-center  justify-start gap-2  w-[100px]  cursor-pointer" onClick={onClick}>
            <Icon name={iconName} color={iconColor} size={iconSize} />
            <Label text={text} type="back" />
        </div>
    );
};

export default Action;
