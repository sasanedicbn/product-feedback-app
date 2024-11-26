import { Answer } from "../../types/types";
import CommentCard from "./CommentCard";

interface CommentAnswersProps {
  answer: Answer;
}

const CommentAnswers = ({ answer }: CommentAnswersProps) => {
  console.log(answer, "jeeeedan");
  return (
    <div className="pl-8 border-l-2 border-gray-300">
      <Commen
    </div>
  );
};

export default CommentAnswers;
