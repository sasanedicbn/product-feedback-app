import { useEffect } from "react";
import { fetchFeedbacksWithAllRelations } from "../../../supabase/supabaseFunctions";
import { useDispatch, useSelector } from "react-redux";
import { setCategories } from "../../store/slices/categorySlice";
import { FeedbackItem } from "../../types/types";
import UserFeedBack from "./UserFeedBack";
import EmptyFeedback from "../../UX/EmptyFeedback";

const ContentBody = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchComments = async () => {
      const data = await fetchFeedbacksWithAllRelations();
      dispatch(setCategories(data));
    };
    fetchComments();
  }, []);

  const commentsData = useSelector(
    (state: { categories: { items: FeedbackItem[] } }) => state.categories.items
  );
  if (commentsData.length === 0) {
    return <EmptyFeedback />;
  }
  return (
    <div className="space-y-4 px-2 sm:px-4">
      {commentsData.map((item: FeedbackItem) => (
        <UserFeedBack item={item} key={item.id} />
      ))}
    </div>
  );
};

export default ContentBody;
