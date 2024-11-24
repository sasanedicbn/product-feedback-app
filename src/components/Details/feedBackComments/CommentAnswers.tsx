import { Answer } from "../../types/types";

interface CommentAnswersProps {
    answer: Answer;
}

const CommentAnswers = ({ answer }: CommentAnswersProps) => {
    console.log(answer, 'zavrsni answer')
    return (
        <div className="flex items-start gap-4 bg-gray-100 p-4 rounded-lg shadow-sm">
            <div>
                <p className="text-gray-800 font-medium">{answer.answer}</p>
                <p className="text-sm text-gray-500">
                    Posted on: {new Date(answer.created_at).toLocaleString()}
                </p>
            </div>
        </div>
    );
};

export default CommentAnswers;
