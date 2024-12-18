import { CommentAnswersProps } from "../../types/types";
import CommentCard from "./CommentCard";

const CommentAnswers = ({ answer }: CommentAnswersProps) => {
  console.log(answer, "hani answers");

  return (
    <div className="pl-8 border-l-2 border-gray-300">
      <CommentCard
        key={answer.id}
        user_image={answer.comment_user_answer?.user_image || ""}
        user={answer.comment_user_answer?.user || "Anonymous"}
        user_name={answer.comment_user_answer?.user_name || ""}
        user_comment={answer.answer}
        answers={[]}
        answerId={answer.comment_user_answer?.id || ""}
        postId={answer.postId || ""}
      />
    </div>
  );
};

export default CommentAnswers;
