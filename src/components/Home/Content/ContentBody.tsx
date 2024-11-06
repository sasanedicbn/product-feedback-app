import Comments from "./ContentBodyItems.tsx/Comments";
import ContentItem from "./ContentBodyItems.tsx/ContentItem";
import Upvotes from "./ContentBodyItems.tsx/Upvotes";

const ContentBody = () => {
    return(
        <div className="bg-slate-400 w-full h-[140px] p-4 rounded-lg flex justify-between items-center">
            <Upvotes/>
            <ContentItem/>
            <Comments/>
        </div>
    )
}

export default ContentBody;