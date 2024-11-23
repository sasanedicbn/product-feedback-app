import { FeedBackCommentsProps } from "../../types/types";
import Wrapper from "../../UX/Wrapper";
import CommentCard from "./CommentCard";

const FeedBackComments = ({ comments }: FeedBackCommentsProps) => {
    // const { Comments } = feedback;
    console.log(comments, 'COmments in feedbackComments')

    return (
        <Wrapper type="feedBackComments">
            {(!comments || comments.length === 0) ? (
                <p className="text-gray-500">No comments available.</p>
            ) : (
                comments.map((comment) => (
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
