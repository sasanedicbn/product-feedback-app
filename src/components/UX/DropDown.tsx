import { useState } from "react";
import Icon from "./Icon";

const DropDown = ({ options, selectedOption, onOptionSelect }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOptionClick = (option) => {
        onOptionSelect(option);
        setIsOpen(false);
    };

    return (
        <div>
            <button onClick={() => setIsOpen(!isOpen)} className=" flex items-center gap-1">
                Sort by: <strong>{selectedOption}</strong>
                <Icon name="down" size={16} color="white" />
            </button>
            {isOpen && (
                <ul className=" absolute bg-slate-500">
                    {options.map((option) => (
                        <li
                            key={option}
                            onClick={() => handleOptionClick(option)}
                            className="cursor-pointer flex gap-6"
                        >
                            {option}
                            {selectedOption === option && <Icon name="check" size={14} color="purple" />}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default DropDown;
