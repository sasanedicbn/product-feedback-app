import Wrapper from "../../UX/Wrapper";
import CommentCard from "./CommentCard";
import ReplayComment from "./ReplayComment";

const FeedBackComments = ({ feedback }) => {
    const { Comments } = feedback;

    if (!Comments) return <p>No comments available.</p>;

    return (
        <Wrapper type="feedBackComments">
            <CommentCard
                user_image={Comments.user_image}
                Comments={Comments}
                user={Comments.user}
                user_name={Comments.user_name}
                user_comment="dasdksdkdasdasdasdasdasasddklasdklsklajdklajdksajdklasjdkljaskldjaskljdklasjdklajskldjaskldjaskdjaklsjdlkjaklsd"
            />
            {/* <ReplayComment Comments={Comments} /> */}
        </Wrapper>
    );
};

export default FeedBackComments;

