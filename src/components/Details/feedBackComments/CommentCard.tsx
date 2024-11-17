import { useState } from "react";
import Button from "../../UX/Button";
import PostReplay from "./PostReplay";

const CommentCard = ({
    user_image,
    user,
    user_name,
    user_comment,
    buttonType,
    containerClass = "",
}: CommentCardProps) => {
    const [isReplyOpen, setIsReplyOpen] = useState(false);

    const toggleReply = () => {
        setIsReplyOpen((prevState) => !prevState);
    };

    return (
        <div className={`flex w-full mb-20 ${containerClass}`}>
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
                {isReplyOpen && <PostReplay />}
            </div>
        </div>
    );
};

export default CommentCard;
