import { useState } from "react";
import Button from "../../UX/Button";
import Textarea from "../../UX/Textarea";

const PostReplay = ({ type, postId }) => {
  const [commentText, setCommentText] = useState("");

  const commentAnswerHandler = (e) => {
    setCommentText({
      //   comment_id: postId,
      comment_id: postId,
      //   type: type ? "answerAnswer" : "",
      answer: e.target.value,
    });

    console.log(commentText, "commentText");
  };

  const postReplyHandler = () => {};

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
