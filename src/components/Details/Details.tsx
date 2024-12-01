import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchFeedbackById } from "../../supabase/supabaseFunctions";
import { useDispatch, useSelector } from "react-redux";
import { setComments, setFeedBack } from "../store/slices/feedBackSlice";
import UserFeedBack from "../Home/Content/UserFeedBack";
import Action from "../UX/Action";
import Button from "../UX/Button";
import FeedBackComments from "./feedBackComments/FeedBackComments";
import AddComment from "./addComment.tsx/AddComment";

const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const feedback = useSelector((state) => state.feedback.feedback);

  useEffect(() => {
    const fetchFeedBack = async () => {
      const feedbackData = await fetchFeedbackById(id);
      dispatch(setFeedBack(feedbackData));
    };
    fetchFeedBack();
  }, [id, dispatch]);

  const homePageHanlder = () => {
    navigation("/");
  };
  if (!feedback) return <div>Loading...</div>;
  return (
    <div className="bg-gray-100 flex gap-5 flex-col pb-12 px-80 pt-16 font-serif">
      <div className="flex items-center justify-between">
        <Action
          iconName="back"
          iconColor="gray"
          iconSize={14}
          text="Go back"
          labelType="back"
          onClick={() => homePageHanlder()}
        />
        <Button type="editFeedBack" onClick={() => console.log("Cancelled")}>
          Edit Feedback
        </Button>
      </div>
      <UserFeedBack item={feedback} />
      <FeedBackComments comments={feedback} />
      <AddComment id={id} />
    </div>
  );
};

export default Details;
