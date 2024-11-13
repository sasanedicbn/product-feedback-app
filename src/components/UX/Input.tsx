import { InputProps } from "../types/types";

const Input = ({type, name, onChange, styleType, placeholder}:InputProps) => {
    const styles = {
        feedback: 'w-[220px]  p-1 border rounded-lg bg-gray-300 text-ml pl-2',
        addFeedBack: 'w-full  p-1 border rounded-lg bg-gray-200 text-ml pl-2 mb-4',
        authForm: `border p-2 rounded-md`
    }
    return(
        <input className={styles[styleType]} type={type} name={name} onChange={onChange} placeholder={placeholder}/>
    )
}
export default Input;