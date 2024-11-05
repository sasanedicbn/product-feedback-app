import { SelectProps } from "../types/types";

const Select = ({ name, onChange, children, className }: SelectProps) => {
    return (
        <select
            name={name}
            onChange={onChange}
            className={`border border-gray-300 rounded-lg ${className}`}
        >
            {children}
        </select>
    );
};

export default Select;
