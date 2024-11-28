import { Answer } from "../../types/types";
import CommentCard from "./CommentCard";

interface CommentAnswersProps {
  answer: Answer;
}

const CommentAnswers = ({ answer }: CommentAnswersProps) => {
  return (
    <div className="pl-8 border-l-2 border-gray-300">
      <CommentCard
        user_image={answer.comment_user_answer?.user_image || ""}
        user={answer.comment_user_answer?.user || "Anonymous"}
        user_name={answer.comment_user_answer?.user_name || ""}
        user_comment={answer.answer}
        answers={[]}
        answerId={answer.comment_user_answer?.id || ""}
      />
    </div>
  );
};

export default CommentAnswers;
