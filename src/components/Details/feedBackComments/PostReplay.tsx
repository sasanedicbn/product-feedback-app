import { useState } from "react";
import Button from "../../UX/Button";
import Textarea from "../../UX/Textarea";

const PostReplay = () => {
  const [commentText, setCommentText] = useState("");

  const commentAnswerHandler = (e) => {
    setCommentText(e.target.value);
    console.log(commentText, "commentText");
  };

  //   const postReplyHandler = () => {
  //     console.log("Posting reply:", commentText);
  //   };

  return (
    <div className="w-full mt-6 rounded-lg">
      <Textarea
        placeholder="Your text here..."
        additionalStyles="bg-gray-50"
        onChange={commentAnswerHandler}
        value={commentText}
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
