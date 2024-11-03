
const Input = ({type, name, onChange, styleType, placeholder}) => {
    const styles = {
        feedback: 'w-[220px]  p-1 border rounded-lg bg-gray-300 text-ml pl-2',
    }
    return(
        <input className={styles[styleType]} type={type} name={name} onChange={onChange} placeholder={placeholder}/>
    )
}
export default Input;