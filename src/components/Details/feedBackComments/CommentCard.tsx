import Button from "../../UX/Button";

const CommentCard = ({ user_image, user, user_name, user_comment, buttonType, containerClass = "", showButton = true }) => {
    return (
        <div className={`flex w-full ${containerClass}`}>
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
                    {showButton && (
                        <Button type={buttonType || "replay"}>
                            Reply
                        </Button>
                    )}
                </div>
                <p className="text-gray-500 text-sm font-light mt-4 break-all">{user_comment}</p>
            </div>
        </div>
    );
};

export default CommentCard;
