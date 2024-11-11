import { useState } from "react";
import Button from "../../UX/Button";
import Icon from "../../UX/Icon";
import DropDown from "../../UX/DropDown";
import { useNavigate } from "react-router-dom";

const ContentTitle = () => {
    const [selectedSortOption, setSelectedSortOption] = useState("Most Upvotes");
    const navigation = useNavigate()

    const handleSortOptionChange = (option:any) => {
        setSelectedSortOption(option);
    };
    const feedBackPageHandler = () => {
        console.log('clicked')
        navigation('/add')
      }

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
                <Button type="addFeedBack" onClick={feedBackPageHandler}>
                    <Icon name="plus" size={14} color="white" />
                    <span className="text-sm ml-1">Add Feedback</span>
                </Button>
            </div>
        </div>
    );
};

export default ContentTitle;
