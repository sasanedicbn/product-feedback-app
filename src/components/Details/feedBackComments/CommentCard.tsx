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
    buttonType,
    containerClass = "",
    answers
}: CommentCardProps) => {
    const [isReplyOpen, setIsReplyOpen] = useState(false);

    const toggleReply = () => {
        setIsReplyOpen((prevState) => !prevState);
    };
    console.log('kao prop dolazi', answers)

    return (
        <div className={`flex w-full mb-8 ${containerClass}`}>
            <img
                src={user_image}
                alt="User"
                className="w-12 h-12 rounded-full mr-4 object-cover"
            />
            <div className="flex-1">
                <div className="flex justify-between items-center">
                    <div>
                        <p className="font-semibold text-blue-950">{user}</p>
                        <p className="text-gray-500 text-sm font-light">{user_name}</p>
                    </div>
                    <Button type={buttonType || "replay"} onClick={toggleReply}>
                        Reply
                    </Button>
                </div>
                <p className="text-gray-500 text-sm font-light mt-4 break-all">
                    {user_comment}
                </p>
                {answers.Answers && answers.Answers.length > 0 &&
                    answers.Answers.map((answer) => (
                        <CommentAnswers
                            key={answer.id}
                            answer={answer} 
                        />
                    ))}
                {isReplyOpen && <PostReplay />}
            </div>
        </div>
    );
};

export default CommentCard;
