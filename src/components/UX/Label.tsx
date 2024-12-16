import { LabelProps } from "../types/types";

const Label = ({ text, type }: LabelProps) => {
  const styles: Record<LabelProps["type"], string> = {
    addFeedBack: "text-blue-900 font-semibold",
    back: "text-gray-500 cursor-pointer",
    backForm: "text-gray-500 cursor-pointer",
    backRoadMap: "text-white cursor-pointer",
  };

  return <label className={styles[type]}>{text}</label>;
};

export default Label;
