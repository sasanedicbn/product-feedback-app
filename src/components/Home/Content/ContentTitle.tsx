import { useState } from "react";
import Button from "../../UX/Button";
import Icon from "../../UX/Icon";
import DropDown from "../../UX/DropDown";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { FeedbackItem, OptionType } from "../../types/types";

const ContentTitle = () => {
  const [selectedSortOption, setSelectedSortOption] =
    useState<OptionType>("Most Upvotes");
  const navigation = useNavigate();

  const handleSortOptionChange = (option: OptionType) => {
    setSelectedSortOption(option);
  };
  const feedBackPageHandler = () => {
    navigation("/add");
  };

  const sortOptions: OptionType[] = [
    "Most Upvotes",
    "Least Upvotes",
    "Most Comments",
    "Least Comments",
  ];
  const commentsData = useSelector(
    (state: { categories: { items: FeedbackItem[] } }) => state.categories.items
  );

  return (
    <div className="flex items-center justify-between rounded-none bg-[#464f79] p-2 px-4 sm:px-2 mb-4 md:rounded-lg md:mx-4">
      <div className="flex items-center">
        <Icon
          name="suggestion"
          size={26}
          color="white"
          className="hidden sm:block"
        />
        <p className="hidden sm:block text-white text-sm md:text-base pl-4 mr-8 font-semibold">
          {commentsData.length} Suggestions
        </p>
        <DropDown
          options={sortOptions}
          selectedOption={selectedSortOption}
          onOptionSelect={handleSortOptionChange}
        />
      </div>
      <div className="flex items-center">
        <Button type="addFeedBack" onClick={feedBackPageHandler}>
          <Icon name="plus" size={14} color="white" />
          <span className="text-xs md:text-sm ml-1">Add Feedback</span>
        </Button>
      </div>
    </div>
  );
};

export default ContentTitle;
