import { OptionProps } from "../types/types";

const Option = ({ value, children}:OptionProps) => {
    return <option value={value}>{children}</option>;
};

export default Option;