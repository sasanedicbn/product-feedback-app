import { SelectProps } from "../types/types";

const Select = ({ name, onChange, children, className }: SelectProps) => {
    return (
        <select
            name={name}
            onChange={onChange}
            className={`border border-gray-300 rounded-lg p-2 w-full bg-gray-200 text-gray-700 ${className} cursor-pointer`}
        >
            {children}
        </select>
    );
};

export default Select;
