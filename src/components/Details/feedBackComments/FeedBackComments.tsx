import Wrapper from "../../UX/Wrapper";

const FeedBackComments = ({ feedback }) => {
    const { Comments } = feedback;

    if (!Comments) return <p>No comments available.</p>;

    return (
        <Wrapper type="feedBackContainer">     
            <div>
            <img src={Comments.user_image} alt="User" />
            <p>User: {Comments.user}</p>
            <p>Username: {Comments.user_name}</p>
            <p>Comment: {Comments.user_comment}</p>
            </div>
        </Wrapper>
    );
};

export default FeedBackComments;
