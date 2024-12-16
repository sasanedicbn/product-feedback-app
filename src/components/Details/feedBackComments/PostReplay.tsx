import { useState } from "react";
import Button from "../../UX/Button";
import Textarea from "../../UX/Textarea";
import { useDispatch, useSelector } from "react-redux";
import { addCommentAndAnswer } from "../../../supabase/supabaseFunctions";
import { addAnswer } from "../../store/slices/feedBackSlice";
import { RootState } from "../../store/store";

const PostReplay = ({
  postId,
  replyTo,
}: {
  postId: string | undefined;
  replyTo: string | null;
}) => {
  const [reply, setReply] = useState<string>(replyTo ? `${replyTo} ` : "");
  const currentUser = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch();

  const commentAnswerHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReply(e.target.value);
  };

  const postReplyHandler = async () => {
    if (!reply.trim()) {
      console.error("Reply cannot be empty.");
      return;
    }

    try {
      const commentId = postId ? parseInt(postId, 10) : null;

      if (!commentId) {
        console.error("Invalid postId.");
        return;
      }

      const newAnswer = await addCommentAndAnswer(currentUser, reply);

      if (newAnswer) {
        dispatch(
          addAnswer({
            comment_id: commentId, // Koristimo konvertovani commentId
            answer: newAnswer,
          })
        );
        setReply("");
      }
    } catch (error) {
      console.error("Error while adding answer:", error);
    }
  };

  return (
    <div className="w-full mt-6 rounded-lg">
      <Textarea
        placeholder="Write your reply..."
        additionalStyles="bg-gray-50"
        onChange={commentAnswerHandler}
        value={reply}
      />
      <div className="flex justify-end mt-4">
        <Button type="addFeedBack" onClick={postReplyHandler}>
          Post Reply
        </Button>
      </div>
    </div>
  );
};

export default PostReplay;
