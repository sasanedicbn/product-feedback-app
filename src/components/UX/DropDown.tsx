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
            <button onClick={() => setIsOpen(!isOpen)} className="flex items-center gap-1 text-sm">
                <span className="text-gray-300">Sort by:</span> <strong className="text-gray-200">{selectedOption}</strong>
                <Icon name="down" size={16} color="#e1e1e6" />
            </button>
            {isOpen && (
                <ul className="absolute bg-white w-[200px] h-[150px] mt-9 rounded-lg shadow-xl border border-solid border-gray-200">
                    {options.map((option) => (
                        <li
                            key={option}
                            onClick={() => handleOptionClick(option)}
                            className="p-2 cursor-pointer flex justify-between items-center font-light text-gray-500  text-sm border-b border-solid border-gray-300 last:border-b-0"
                        >
                            {option}
                            {selectedOption === option && <Icon name="check" size={14} color="#a855f7" />}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default DropDown;
