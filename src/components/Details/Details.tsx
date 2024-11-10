import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchFeedbackById } from "../../supabase/supabaseFunctions";
import { useDispatch, useSelector } from "react-redux";
import { setFeedBack } from "../store/slices/feedBackSlice";
import UserFeedBack from "../Home/Content/UserFeedBack";
import Action from "../UX/Action";
import Button from "../UX/Button";
import Wrapper from "../UX/Wrapper";
import FeedBackComments from "./feedBackComments/FeedBackComments";

const Details = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigation = useNavigate()
    const feedback = useSelector((state) => state.feedback.feedback);

    useEffect(() => {
        const fetchFeedBack = async () => {
            const feedbackData = await fetchFeedbackById(id);
            console.log(feedbackData, 'feedback data');
            dispatch(setFeedBack(feedbackData));
        };
        fetchFeedBack();
    }, [id, dispatch]);

const homePageHanlder = () => {
    navigation('/')
}
    console.log(feedback, 'feedback from store');

    if (!feedback) return <div>Loading...</div>;
    // bg-white w-full h-[140px] p-4 rounded-lg flex justify-between items-center px-6
    return (
        <div className="bg-gray-100 flex gap-5 flex-col h-[1000px] px-80 pt-16 font-serif">
            <div className="flex items-center justify-between">
             <Action
                iconName="back" 
                iconColor="gray" 
                iconSize={14} 
                text="Go back"
                onClick={() => homePageHanlder()}
            />
             <Button type="editFeedBack" onClick={() => console.log("Cancelled")}>
              Edit Feedback
              </Button>
              </div>
            <UserFeedBack item={feedback}/>
            <FeedBackComments feedback={feedback}/>
        </div>
    );
};

export default Details;
