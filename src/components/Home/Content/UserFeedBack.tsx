import Comments from "./ContentBodyItems.tsx/Comments";
import ContentItem from "./ContentBodyItems.tsx/ContentItem";
import Upvotes from "./ContentBodyItems.tsx/Upvotes";

const UserFeedBack = ({item}) => {
    return(
        <div key={item.id} className="bg-white w-full h-[140px] p-4 rounded-lg flex justify-between items-center px-6">
        <div className="flex items-start gap-8">
            <Upvotes upvotes={item.comments} />
            <ContentItem title={item.title} feedback={item.feedback} category={item.Category.Category} itemId={item.id} />
        </div>
        <Comments comments={item.comments} />
    </div>
    )
}

export default UserFeedBack;