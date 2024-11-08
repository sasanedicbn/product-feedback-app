import { motion } from "framer-motion";
import Input from "../UX/Input";
import Button from "../UX/Button";
import FeedBackTitle from "./FeedBackItems/FeedBackTitle";
import Select from "../UX/Select";
import Option from "../UX/Option";
import Action from "../UX/Action";
import AnimationCircle from "../UX/AnimationCircle";

const FeedBack = () => {
    return (
        <div className="bg-gray-100 flex justify-center items-center flex-col h-screen px-8 pt-16 font-serif ">
            <Action 
                iconName="back" 
                iconColor="gray" 
                iconSize={14} 
                text="Go back"
                onClick={() => console.log("Back action triggered")}
            />
            <AnimationCircle/>
            <motion.div
                className="bg-white w-[500px] p-8 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h3 className="text-2xl text-left mb-6 text-blue-900 font-semibold">Create New Feedback</h3>

                <FeedBackTitle 
                    title="Feedback Title" 
                    subtitle="Add a short, descriptive headline" 
                />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                >
                    <Input
                        type="text" 
                        name="title" 
                        styleType="addFeedBack" 
                        placeholder="Enter feedback title"
                        onChange={() => console.log('')}
                    />
                </motion.div>

                <FeedBackTitle 
                    title="Category" 
                    subtitle="Choose a category for your feedback" 
                />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                >
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
                </motion.div>

                <FeedBackTitle 
                    title="Feedback Detail" 
                    subtitle="Include any specific comments on what should be improved, added, etc." 
                />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.6 }}
                >
                    <textarea 
                        className="w-full p-2 border rounded-lg bg-gray-200 text-gray-700 h-32 mb-6"
                        placeholder="Describe the feedback"
                    />
                </motion.div>

                <motion.section
                    className="flex justify-between"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                >
                    <Button type="cancelFeedBack" onClick={() => console.log("Cancelled")}>
                        Cancel
                    </Button>
                    <Button type="addFeedBack" onClick={() => console.log("Feedback added")}>
                        Add Feedback
                    </Button>
                </motion.section>
            </motion.div>
        </div>
    );
};

export default FeedBack;
