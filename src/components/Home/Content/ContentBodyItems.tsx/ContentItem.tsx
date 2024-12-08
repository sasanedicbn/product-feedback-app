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
    <div onClick={handleItemClick} className="text-dark-blue cursor-pointer">
      <h2 className="text-sm sm:text-lg md:text-xl text-blue-950 opacity-90 font-bold">
        {title}
      </h2>
      <p className="text-sm sm:text-base text-gray-500 font-light my-1">
        {feedback}
      </p>
      <div className="flex flex-wrap justify-start">
        <SingleCategory category={category} />
      </div>
    </div>
  );
};

export default ContentItem;
