import { useState } from "react";
import Button from "../../UX/Button";
import PostReplay from "./PostReplay";
import { CommentCardProps } from "../../types/types";
import CommentAnswers from "./CommentAnswers";

const CommentCard = ({
  user_image,
  user,
  user_name,
  user_comment,
  buttonType = "replay",
  containerClass = "",
  answers = [],
  type,
  id,
  postId,
}: CommentCardProps) => {
  const [isReplyOpen, setIsReplyOpen] = useState(false);

  const toggleReply = () => setIsReplyOpen((prev) => !prev);

  return (
    <div className={`flex w-full mb-8 ${containerClass}`}>
      <img
        src={user_image}
        alt={`${user}'s avatar`}
        className="w-12 h-12 rounded-full mr-4 object-cover"
      />
      <div className="flex-1">
        <div className="flex justify-between items-center">
          <div>
            <p className="font-semibold text-blue-950">{user}</p>
            <p className="text-gray-500 text-sm font-light">{user_name}</p>
          </div>
          <Button type={buttonType} onClick={toggleReply}>
            Reply
          </Button>
        </div>
        <p className="text-gray-500 text-sm font-light mt-4 break-all">
          {user_comment}
        </p>
        {isReplyOpen && (
          <PostReplay
            type={type}
            postId={postId}
            // answerId={
            //   answers.length > 0
            //     ? answers.map((answ) => answ.comment_user_answer?.id)
            //     : ""
            // }
          />
        )}
        {answers.length > 0 && (
          <div className="mt-4 space-y-4">
            {answers.map((answer) => (
              <CommentAnswers key={answer.id} answer={answer} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CommentCard;
