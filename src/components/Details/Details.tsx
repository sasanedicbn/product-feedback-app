import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchFeedbackById } from "../../supabase/supabaseFunctions";
import { useDispatch, useSelector } from "react-redux";
import { setFeedBack } from "../store/slices/feedBackSlice";
import UserFeedBack from "../Home/Content/UserFeedBack";
import Action from "../UX/Action";
import Button from "../UX/Button";
import FeedBackComments from "./feedBackComments/FeedBackComments";
import AddComment from "./addComment.tsx/AddComment";
import { RootState } from "../store/store";

const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const feedback = useSelector((state: RootState) => state.feedback.feedback);

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
    <div className="bg-gray-100 flex gap-5 flex-col pb-12 justify-center pt-16 font-serif">
      <div className="md:max-w-[725px] md:bg-red-200 mx-auto sm: bg-red-400 max-w-[650px]">
        <div className="flex items-center justify-between mb-4">
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
        <UserFeedBack item={feedback} roadmap={false} />
        <FeedBackComments comments={feedback} />
        <AddComment id={id} />
      </div>
    </div>
  );
};

export default Details;
