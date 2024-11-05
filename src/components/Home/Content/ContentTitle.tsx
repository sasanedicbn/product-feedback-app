import { HiChevronDown } from "react-icons/hi";
import Button from "../../UX/Button";
import Icon from "../../UX/Icon";

const ContentTitle = () => {
    return (
        <div className="flex items-center justify-between bg-slate-400 p-4 rounded-lg">
            <div className="flex items-center space-x-3">
                <Icon name="suggestion" size={26} color="white" />
                <p className="text-white text-lg font-semibold">6 Suggestions</p>
                
                <p className="text-sm pl-6 text-gray-200">Sort by: <strong className="text-white">Most Upvotes</strong>  </p>
            </div>
            
            <div className="flex items-center">
                <Button type="addFeedBack" className="flex items-center space-x-2 text-white bg-blue-500 rounded-lg px-4 py-2">
                    <Icon name="plus" size={18} color="white" /> 
                    <span>Add Feedback</span>
                </Button>
            </div>
        </div>
    );
};

export default ContentTitle;
