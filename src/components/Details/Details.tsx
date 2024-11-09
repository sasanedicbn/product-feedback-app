import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchFeedbackById } from "../../supabase/supabaseFunctions";
import { useDispatch, useSelector } from "react-redux";
import { setFeedBack } from "../store/slices/feedBackSlice";
import UserFeedBack from "../Home/Content/UserFeedBack";

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
        <div className="bg-gray-100 flex justify-between h-[1000px] px-80 pt-16 font-serif">
               <UserFeedBack item={feedback}/>
        </div>
    );
};

export default Details;
