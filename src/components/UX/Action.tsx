import Icon from "./Icon";
import Label from "./Label";

const Action = ({ iconName, iconColor, iconSize, text, onClick }) => {
    return (
        <div className="flex items-center  justify-start gap-2 absolute top-6 left-80 w-[100px] mb-2 cursor-pointer" onClick={onClick}>
            <Icon name={iconName} color={iconColor} size={iconSize} />
            <Label text={text} type="back" />
        </div>
    );
};

export default Action;
