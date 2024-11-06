import Content from "./Content";
import Comments from "./ContentBodyItems.tsx/Comments";
import Upvotes from "./ContentBodyItems.tsx/Upvotes";

const ContentBody = () => {
    return(
        <div className="bg-slate-400 w-full h-[140px] p-4 rounded-lg">
            <Upvotes/>
            <Content/>
            <Comments/>
        </div>
    )
}

export default ContentBody;