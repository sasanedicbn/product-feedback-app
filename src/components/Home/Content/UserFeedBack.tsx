import Wrapper from "../../UX/Wrapper";
import Comments from "./ContentBodyItems.tsx/Comments";
import ContentItem from "./ContentBodyItems.tsx/ContentItem";
import Upvotes from "./ContentBodyItems.tsx/Upvotes";

const UserFeedBack = ({item}) => {
    return(
    <Wrapper type="feedBackContainer">
        <div className="flex items-start gap-8">
            <Upvotes upvotes={item.comments} />
            <ContentItem title={item.title} feedback={item.feedback} category={item.Category.Category} itemId={item.id} />
        </div>
        <Comments comments={item.comments} />
    </Wrapper>
    )
}

export default UserFeedBack;