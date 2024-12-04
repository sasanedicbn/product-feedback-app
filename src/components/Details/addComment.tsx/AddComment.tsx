import { ChangeEvent, useState } from "react";
import FeedBackTitle from "../../FeedBack/FeedBackItems/FeedBackTitle";
import Wrapper from "../../UX/Wrapper";
import LengthComments from "./LengthComments";
import Textarea from "../../UX/Textarea";
import { useDispatch, useSelector } from "react-redux";
import { postComment } from "../../../supabase/supabaseFunctions";
import { addComment } from "../../store/slices/feedBackSlice";
import { toast } from "react-toastify";
import { RootState } from "../../store/store";
import { CommentState } from "../../types/types";

const AddComment = ({ id }: { id: string | undefined }) => {
  const [lengthComment, setLengthComment] = useState(225);
  const [updateComment, setUpdateComment] = useState<CommentState>({
    user_comment: "",
  });
  const currentUser = useSelector((user: RootState) => user.user.user);
  const dispatch = useDispatch();

  const updateCommentHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const comment = e.target.value;
    setUpdateComment({
      ...updateComment,
      user: currentUser.full_name,
      user_name: currentUser.user_name,
      user_image: currentUser.user_image,
      user_comment: comment,
      feedback_id: id,
    });
  };

  const postCommentHandler = async () => {
    const newComment = await postComment(updateComment);
    if (newComment) {
      dispatch(addComment(newComment));
      toast.success("You added a new comment!");
      setUpdateComment({ user_comment: "" });
      setLengthComment(225);
    }
  };

  const updateLengthComment = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const remainingLength = 225 - e.target.value.length;
    setLengthComment(remainingLength >= 0 ? remainingLength : 0);
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    updateLengthComment(e);
    updateCommentHandler(e);
  };

  return (
    <Wrapper type="feedBackComments">
      <FeedBackTitle
        title="Add Comment"
        subtitle="Share with us your opinion about this feedback"
      />
      <Textarea
        placeholder="Add comment"
        rows={4}
        value={updateComment.user_comment}
        additionalStyles="bg-gray-200 text-gray-700 h-28 mb-6"
        onChange={handleChange}
        maxLength={225}
      />
      <LengthComments
        length={lengthComment}
        postCommentHandler={postCommentHandler}
      />
    </Wrapper>
  );
};

export default AddComment;
