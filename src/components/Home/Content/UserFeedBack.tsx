import Wrapper from "../../UX/Wrapper";
import Comments from "./ContentBodyItems.tsx/Comments";
import ContentItem from "./ContentBodyItems.tsx/ContentItem";
import FeedbackType from "./ContentBodyItems.tsx/FeedbackType";
import Upvotes from "./ContentBodyItems.tsx/Upvotes";

const UserFeedBack = ({ item, roadmap = false }: any) => {
  return (
    <Wrapper type="feedBackContainer">
      <div
        className={
          roadmap
            ? "gap-2 flex-col sm:gap-6"
            : "flex items-start gap-2 sm:gap-6  "
        }
      >
        {roadmap ? <FeedbackType type={item.type} /> : ""}
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
