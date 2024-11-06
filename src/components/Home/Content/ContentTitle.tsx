import { useState } from "react";
import Button from "../../UX/Button";
import Icon from "../../UX/Icon";
import DropDown from "../../UX/DropDown";

const ContentTitle = () => {
    const [selectedSortOption, setSelectedSortOption] = useState("Most Upvotes");

    const handleSortOptionChange = (option) => {
        setSelectedSortOption(option);
    };

    const sortOptions = ["Most Upvotes", "Least Upvotes", "Most Comments", "Least Comments"];

    return (
        <div className="flex items-center justify-between bg-[#464f79] p-4 rounded-lg mb-4">
            <div className="flex items-center">
                <Icon name="suggestion" size={26} color="white" />
                <p className="text-white text-lg pl-4 mr-8 font-semibold">6 Suggestions</p>
                <DropDown
                    options={sortOptions} 
                    selectedOption={selectedSortOption} 
                    onOptionSelect={handleSortOptionChange}
                />
            </div>
            <div className="flex items-center">
                <Button type="addFeedBack" className="flex items-center space-x-2 text-white bg-blue-500 rounded-lg px-6 py-2">
                    <Icon name="plus" size={14} color="white" />
                    <span className="text-sm ml-1">Add Feedback</span>
                </Button>
            </div>
        </div>
    );
};

export default ContentTitle;
