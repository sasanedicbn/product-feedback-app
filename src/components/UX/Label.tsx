import { LabelProps } from "../types/types";

const Label = ({text, type}:LabelProps) => {
  const styles = {
    addFeedBack : 'text-blue-900 font-semibold'
  }
    return(
      <label className={styles[type]}>{text}</label>
    )
}
export default Label;