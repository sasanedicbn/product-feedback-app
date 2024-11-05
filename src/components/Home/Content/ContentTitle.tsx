import Button from "../../UX/Button";
import Icon from "../../UX/Icon";
import Select from "../../UX/Select";
import Option from "../../UX/Option"; 

const ContentTitle = () => {
    return (
        <div className="flex items-center justify-between bg-slate-400 p-4 rounded-lg">
            <div className="flex items-center space-x-3">
                <Icon name="suggestion" size={26} color="white" />
                <p className="text-white text-lg font-semibold">6 Suggestions</p>
                
                <Select name="sort" className="text-gray-600 bg-white rounded-lg p-2">
                    <Option value="most-upvotes">Most Upvotes</Option>
                    <Option value="least-upvotes">Least Upvotes</Option>
                    <Option value="most-comments">Most Comments</Option>
                    <Option value="least-comments">Least Comments</Option>
                </Select>
            </div>
            
            <div className="flex items-center">
                <Button type="addFeedBack" className="flex items-center space-x-2 text-white bg-blue-500 rounded-lg px-4 py-2">
                    <Icon name="plus" size={20} color="white" /> 
                    <span>Add Feedback</span>
                </Button>
            </div>
        </div>
    );
};

export default ContentTitle;
