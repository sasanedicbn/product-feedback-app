import { useState } from "react";
import Button from "../../UX/Button";
import Textarea from "../../UX/Textarea";
import { useDispatch, useSelector } from "react-redux";
import { addCommentAndAnswer } from "../../../supabase/supabaseFunctions";
import { addComment } from "../../store/slices/feedBackSlice";

const PostReplay = ({ type, postId }) => {
  const [commentText, setCommentText] = useState("");
  const currentUser = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const commentAnswerHandler = (e) => {
    setCommentText({
      comment_id: postId,
      answer: e.target.value,
    });

    console.log(commentText, "commentText");
  };

  const postReplyHandler = async () => {
    const newAnswer = await addCommentAndAnswer(
      currentUser,
      commentText.answer
    );
    console.log(newAnswer, "gledaj ovo dodati podkomentar");
    if (newAnswer) {
      dispatch(addComment(newAnswer));
    }
  };

  return (
    <div className="w-full mt-6 rounded-lg">
      <Textarea
        placeholder="Your text here..."
        additionalStyles="bg-gray-50"
        onChange={commentAnswerHandler}
        value={commentText.comment}
      />
      <div className="flex justify-end">
        <Button type="addFeedBack" onClick={postReplyHandler}>
          Post Reply
        </Button>
      </div>
    </div>
  );
};

export default PostReplay;
