import { useEffect } from "react";
import { fetchFeedbacksWithAllRelations } from "../../../supabase/supabaseFunctions";
import { useDispatch, useSelector } from "react-redux";
import { setCategories } from "../../store/slices/categorySlice";
import { FeedbackItem } from "../../types/types";
import UserFeedBack from "./UserFeedBack";

const ContentBody = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchComments = async () => {
            const data = await fetchFeedbacksWithAllRelations();
            console.log(data, 'data 22')
            dispatch(setCategories(data));
        };
        fetchComments();
    }, []);

    const commentsData = useSelector((state: { categories: { items: FeedbackItem[] } }) => state.categories.items);
   
    return (
        <div className="space-y-4"> 
            {commentsData.map((item: FeedbackItem) => (
                <UserFeedBack item={item} key={item.id}/>
            ))}
        </div>
    );
};

export default ContentBody;
