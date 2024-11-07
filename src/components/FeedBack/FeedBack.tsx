
import Input from "../UX/Input";
import Button from "../UX/Button";
import FeedBackTitle from "./FeedBackItems/FeedBackTitle";
import Select from "../UX/Select";
import Option from "../UX/Option";

const FeedBack = () => {
    return (
        <div className="bg-gray-100 flex justify-center items-center flex-col h-screen px-8 pt-16 font-serif">
            <p>Go back</p>
            <div className="bg-white w-[500px] p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl text-left mb-6 text-blue-900 font-semibold">Create New Feedback</h3>

                <FeedBackTitle 
                    title="Feedback Title" 
                    subtitle="Add a short, descriptive headline" 
                />
                <Input
                    type="text" 
                    name="title" 
                    styleType="addFeedBack" 
                    placeholder="Enter feedback title"
                />
                <FeedBackTitle 
                    title="Category" 
                    subtitle="Choose a category for your feedback" 
                />
                <Select 
                    name="category" 
                    onChange={(e) => console.log("Selected category:", e.target.value)}
                    className="mb-4"
                >
                    <Option value="">Select category</Option>
                    <Option value="feature">Feature</Option>
                    <Option value="ui">UI</Option>
                    <Option value="ux">UX</Option>
                    <Option value="enhancement">Enhancement</Option>
                    <Option value="bug">Bug</Option>
                </Select>

                <FeedBackTitle 
                    title="Feedback Detail" 
                    subtitle="Include any specific comments on what should be improved, added, etc." 
                />
                <textarea 
                    className="w-full p-2 border rounded-lg bg-gray-200 text-gray-700 h-32 mb-6"
                    placeholder="Describe the feedback"
                />

                <section className="flex justify-between ">
                    <Button type="cancelFeedBack" onClick={() => console.log("Cancelled")}>
                        Cancel
                    </Button>
                    <Button type="addFeedBack" onClick={() => console.log("Feedback added")}>
                        Add Feedback
                    </Button>
                </section>
            </div>
        </div>
    );
}

export default FeedBack;
