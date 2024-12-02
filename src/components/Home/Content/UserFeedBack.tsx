import Wrapper from "../../UX/Wrapper";
import Comments from "./ContentBodyItems.tsx/Comments";
import ContentItem from "./ContentBodyItems.tsx/ContentItem";
import FeedbackType from "./ContentBodyItems.tsx/FeedbackType";
import Upvotes from "./ContentBodyItems.tsx/Upvotes";

const UserFeedBack = ({ item, roadmap = false }) => {
  return (
    <Wrapper type="feedBackContainer">
      <div className="flex items-start gap-8 flex-col">
        {roadmap ? <FeedbackType type={item.type} /> : ""}{" "}
        {roadmap ? "" : <Upvotes upvotes={item.upvotes} />}
        <ContentItem
          title={item.title}
          feedback={item.feedback}
          category={item.Category.Category}
          itemId={item.id}
        />
      </div>
      {roadmap ? "" : <Comments comments={item.Comments.length} />}
    </Wrapper>
  );
};

export default UserFeedBack;
