import { motion } from "framer-motion";
import Input from "../UX/Input";
import Button from "../UX/Button";
import FeedBackTitle from "./FeedBackItems/FeedBackTitle";
import Select from "../UX/Select";
import Option from "../UX/Option";
import Action from "../UX/Action";
import AnimationCircle from "../UX/AnimationCircle";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { postFeedback } from "../../supabase/supabaseFunctions";
import { useDispatch } from "react-redux";
import { setCategories } from "../store/slices/categorySlice";
import { toast } from "react-toastify";

const FeedBack = () => {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const [feedbackData, setFeedbackData] = useState({
    title: "",
    category_id: "",
    feedback: "",
  });

  const FeedBackInputHandler = (e) => {
    const { name, value } = e.target;
    setFeedbackData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  console.log(feedbackData, "gledaj");

  const postNewFeedback = async () => {
    const feedback = await postFeedback(feedbackData);
    if (feedback) {
      dispatch(setCategories(feedback));
      navigation("/");
      toast.success("New Feedback!");
    } else {
      toast.error("Error, sorry! Try again");
    }
  };

  const homePageHandler = () => {
    navigation("/");
  };

  return (
    <div className="bg-gray-100 flex justify-center items-center flex-col px-12 pt-6 pb-6 font-serif ">
      <AnimationCircle />
      <motion.div
        className="bg-white w-[500px] p-8 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Action
          iconName="back"
          iconColor="gray"
          iconSize={14}
          text="Go back"
          labelType="backForm"
          onClick={homePageHandler}
        />
        <h3 className="text-2xl text-left mb-6 text-blue-900 font-semibold">
          Create New Feedback
        </h3>

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
            onChange={FeedBackInputHandler}
          />
        </motion.div>

        <FeedBackTitle
          title="Category"
          subtitle="Choose a category for your feedback and type"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <Select name="type" onChange={FeedBackInputHandler} className="mb-4">
            <Option value="">Select category</Option>
            <Option value="Feature">Feature</Option>
            <Option value="Ul">UI</Option>
            <Option value="UX">UX</Option>
            <Option value="Enhancement">Enhancement</Option>
            <Option value="Bug">Bug</Option>
          </Select>
          <Select
            name="category_id"
            onChange={FeedBackInputHandler}
            className="mb-4"
          >
            <Option value="">Select type</Option>
            <Option value="Live">Live</Option>
            <Option value="Progress">Progress</Option>
            <Option value="Planned">Planned</Option>
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
            name="feedback"
            onChange={FeedBackInputHandler}
          />
        </motion.div>

        <motion.section
          className="flex justify-between"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <Button type="cancelFeedBack" onClick={homePageHandler}>
            Cancel
          </Button>
          <Button type="addFeedBack" onClick={postNewFeedback}>
            Add Feedback
          </Button>
        </motion.section>
      </motion.div>
    </div>
  );
};

export default FeedBack;
