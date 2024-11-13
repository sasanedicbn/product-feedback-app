import Wrapper from "../../UX/Wrapper";
import CommentCard from "./CommentCard";
import ReplayComment from "./ReplayComment";

const FeedBackComments = ({ feedback }) => {
    const { Comments } = feedback;

    if (!Comments) return <p>No comments available.</p>;

    return (
        <Wrapper type="feedBackComments">
             {Comments.map((comment) => (
                <CommentCard
                    key={comment.id}  // Svaki komentar treba imati jedinstveni ključ
                    user_image={comment.user_image}
                    user={comment.user}
                    user_name={comment.user_name}
                    user_comment={comment.user_comment}  // Pretpostavljam da je ovo polje za tekst komentara
                    Comments={Comments}  // Prosleđujemo ceo niz komentara ako je potrebno u CommentCard
                />
            ))}
            {/* <ReplayComment Comments={Comments} /> */}
        </Wrapper>
    );
};

export default FeedBackComments;
