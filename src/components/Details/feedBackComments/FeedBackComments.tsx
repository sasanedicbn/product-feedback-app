import { FeedBackCommentsProps } from "../../types/types";
import Wrapper from "../../UX/Wrapper";
import CommentCard from "./CommentCard";

const FeedBackComments = ({ feedback }: FeedBackCommentsProps) => {
    const { Comments } = feedback;

    return (
        <Wrapper type="feedBackComments">
            {(!Comments || Comments.length === 0) ? (
                <p className="text-left text-gray-500">No comments available.</p>
            ) : (
                Comments.map((comment) => (
                    <CommentCard
                        key={comment.id}
                        user_image={comment.user_image}
                        user={comment.user}
                        user_name={comment.user_name}
                        user_comment={comment.user_comment}
                    />
                ))
            )}
        </Wrapper>
    );
};

export default FeedBackComments;
