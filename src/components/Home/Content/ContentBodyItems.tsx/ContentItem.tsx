import { useNavigate } from "react-router-dom";
import SingleCategory from "../../../UX/SingleCategory";
import { ContentItemProps } from "../../../types/types";

const ContentItem = ({
  title,
  feedback,
  category,
  itemId = null,
}: ContentItemProps) => {
  const navigate = useNavigate();

  const handleItemClick = () => {
    navigate(`/details/${itemId}`);
  };

  return (
    <div onClick={handleItemClick} className="text-dark-blue  cursor-pointer">
      <h2 className="md:text-blue-950 opacity-90  text-xl font-bold sm:text-orange-300">
        {title}
      </h2>
      <p className="text-gray-500 text-sm font-light my-1">{feedback}</p>
      <div className="flex flex-wrap justify-start">
        <SingleCategory category={category} />
      </div>
    </div>
  );
};

export default ContentItem;
