import { FeedBackCommentsProps } from "../../types/types";
import Wrapper from "../../UX/Wrapper";
import CommentCard from "./CommentCard";

const FeedBackComments = ({ feedback }: FeedBackCommentsProps) => {
    const { Comments } = feedback;

    if (!Comments) return <p>No comments available.</p>;

    return (
        <Wrapper type="feedBackComments">
            {Comments.map((comment) => (
                <CommentCard
                    key={comment.id}
                    user_image={comment.user_image}
                    user={comment.user}
                    user_name={comment.user_name}
                    user_comment={comment.user_comment}
                />
            ))}
        </Wrapper>
    );
};

export default FeedBackComments;
