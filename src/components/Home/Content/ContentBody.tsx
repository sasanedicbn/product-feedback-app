import Comments from "./ContentBodyItems.tsx/Comments";
import ContentItem from "./ContentBodyItems.tsx/ContentItem";
import Upvotes from "./ContentBodyItems.tsx/Upvotes";

const ContentBody = () => {
    return(
        <div className="bg-white w-full h-[140px] p-4 rounded-lg flex justify-between items-center px-6">
            <div className="flex items-start gap-8 ">
             <Upvotes/>
             <ContentItem/>
            </div>
            <Comments/>
        </div>
    )
}

export default ContentBody;