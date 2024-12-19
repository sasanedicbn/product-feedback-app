import { FeedBackCommentsProps } from "../../types/types";
import Wrapper from "../../UX/Wrapper";
import CommentCard from "./CommentCard";

const FeedBackComments = ({
  comments,
}: {
  comments: FeedBackCommentsProps;
}) => {
  const feedbackComments = comments.Comments;

  console.log(comments, "komo");
  return (
    <Wrapper type="feedBackComments">
      {!feedbackComments ? (
        <p className="text-gray-500 mb-2">No comments available.</p>
      ) : (
        // @ts-ignore
        feedbackComments.map((comment) => (
          // @ts-ignore
          <CommentCard
            key={comment.id}
            postId={comment.id.toString()}
            user_image={comment.user_image}
            user={comment.user}
            user_name={comment.user_name}
            user_comment={comment.user_comment}
            answers={comment.Answers}
            type={true}
          />
        ))
      )}
    </Wrapper>
  );
};

export default FeedBackComments;
