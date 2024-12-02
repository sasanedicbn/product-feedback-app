import { useNavigate } from "react-router-dom";
import SingleCategory from "../../../UX/SingleCategory";

const ContentItem = ({ title, feedback, category, itemId = null }) => {
  const navigate = useNavigate();

  const handleItemClick = () => {
    navigate(`/details/${itemId}`);
  };

  return (
    <div onClick={handleItemClick} className="text-dark-blue  cursor-pointer">
      <h2 className="text-blue-950 opacity-90  text-xl font-bold">{title}</h2>
      <p className="text-gray-500 text-sm font-light my-1">{feedback}</p>
      <div className="flex flex-wrap justify-start">
        <SingleCategory category={category} />
      </div>
    </div>
  );
};

export default ContentItem;
