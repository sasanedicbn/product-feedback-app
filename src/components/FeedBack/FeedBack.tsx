import Wrapper from "../UX/Wrapper";
import Label from "../UX/Label";
import Input from "../UX/Input";
import Button from "../UX/Button";

const FeedBack = () => {
    return(
        <div className="bg-gray-100 flex justify-center items-center h-screen px-8 pt-16 font-serif">
            <div className="bg-white w-[500px] p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-center mb-6 text-purple-600">Create New Feedback</h3>
                
                <section className="mb-4">
                    <Label text="Feedback Title" />
                    <p className="text-sm text-gray-500 mb-2">Add a short, descriptive headline</p>
                    <Input 
                        type="text" 
                        name="title" 
                        styleType="feedback" 
                        placeholder="Enter feedback title"
                    />
                </section>
                
                <section className="mb-4">
                    <Label text="Category" />
                    <p className="text-sm text-gray-500 mb-2">Choose a category for your feedback</p>
                    <select className="w-full p-2 border rounded-lg bg-gray-200 text-gray-700">
                        <option value="">Select category</option>
                        <option value="feature">Feature</option>
                        <option value="ui">UI</option>
                        <option value="ux">UX</option>
                        <option value="enhancement">Enhancement</option>
                        <option value="bug">Bug</option>
                    </select>
                </section>
                
                <section className="mb-6">
                    <Label text="Feedback Detail" />
                    <p className="text-sm text-gray-500 mb-2">Include any specific comments on what should be improved, added, etc.</p>
                    <textarea 
                        className="w-full p-2 border rounded-lg bg-gray-200 text-gray-700 h-32"
                        placeholder="Describe the feedback"
                    />
                </section>
                
                <section className="flex justify-between">
                    <Button type="addFeedBack" onClick={() => console.log("Cancelled")}>
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
