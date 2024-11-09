import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchFeedbackById } from "../../supabase/supabaseFunctions";
import { useDispatch, useSelector } from "react-redux";
import { setFeedBack } from "../store/slices/feedBackSlice";
import UserFeedBack from "../Home/Content/UserFeedBack";
import Action from "../UX/Action";
import Button from "../UX/Button";

const Details = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const feedback = useSelector((state) => state.feedback.feedback);

    useEffect(() => {
        const fetchFeedBack = async () => {
            const feedbackData = await fetchFeedbackById(id);
            console.log(feedbackData, 'feedback data');
            dispatch(setFeedBack(feedbackData));
        };
        fetchFeedBack();
    }, [id, dispatch]);

    console.log(feedback, 'feedback from store');

    if (!feedback) return <div>Loading...</div>;

    return (
        <div className="bg-gray-100 flex gap-5 flex-col h-[1000px] px-80 pt-16 font-serif">
            <div className="flex items-center justify-between">
             <Action
                iconName="back" 
                iconColor="gray" 
                iconSize={14} 
                text="Go back"
                onClick={() => console.log("Back action triggered")}
            />
             <Button type="editFeedBack" onClick={() => console.log("Cancelled")}>
              Edit Feedback
              </Button>
              </div>
            <UserFeedBack item={feedback}/>
        </div>
    );
};

export default Details;
{/* <Button type="cancelFeedBack" onClick={() => console.log("Cancelled")}>
Cancel
</Button>
<Button type="addFeedBack" onClick={() => console.log("Feedback added")}>
Add Feedback
</Button> */}