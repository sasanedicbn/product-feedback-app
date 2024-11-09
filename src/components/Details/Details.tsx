import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchFeedbackById } from "../../supabase/supabaseFunctions";
import { useDispatch, useSelector } from "react-redux";
import { setFeedBack } from "../store/slices/feedBackSlice";

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
        <div>
            <h1>Details for Feedback ID: {feedback.id}</h1>
            <h2>Title: {feedback.title}</h2>
            <p>Feedback: {feedback.feedback}</p>
            <p>Created At: {feedback.created_at}</p>
            
            <div>
                <h3>Category: {feedback.Category?.Category || 'N/A'}</h3>
            </div>

            <div>
                <h3>Comments:</h3>
                {feedback.Comments ? (
                    <div>
                        <p>User: {feedback.Comments.user}</p>
                        <p>Username: {feedback.Comments.user_name}</p>
                        <p>Comment: {feedback.Comments.user_comment}</p>
                        <img src={feedback.Comments.user_image} alt="User" />
                    </div>
                ) : (
                    <p>No comments available.</p>
                )}
            </div>
        </div>
    );
};

export default Details;
