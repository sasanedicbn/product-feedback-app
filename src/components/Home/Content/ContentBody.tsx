import { useEffect } from "react";
import { fetchFeedbacksWithAllRelations } from "../../../supabase/supabaseFunctions";
import Comments from "./ContentBodyItems.tsx/Comments";
import ContentItem from "./ContentBodyItems.tsx/ContentItem";
import Upvotes from "./ContentBodyItems.tsx/Upvotes";
import { useDispatch, useSelector } from "react-redux";
import { setCategories } from "../../store/slices/categorySlice";

const ContentBody = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        const fetchComments  = async() => {
            const data = await fetchFeedbacksWithAllRelations();
            dispatch(setCategories(data)); 
        };
        fetchComments();
    }, []);

    const commentsData = useSelector((state) => state.categories.items); 
    console.log(commentsData, 'commentsData')

    return (
        <div className="space-y-4"> 
            {commentsData.map(item => (
                <motion.div key={item.id} className="bg-white w-full h-[140px] p-4 rounded-lg flex justify-between items-center px-6">
                    <div className="flex items-start gap-8">
                        <Upvotes  upvotes={item.comments} />
                        <ContentItem  title={item.title} feedback={item.feedback} category={item.Category.Category} />
                    </div>
                    <Comments comments={item.comments} />
                </motion.div>
            ))}
        </div>
    );
};

export default ContentBody;
