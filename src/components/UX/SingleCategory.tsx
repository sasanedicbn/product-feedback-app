import { motion } from "framer-motion";
import { sortFeedBacksByCategory } from "../../supabase/supabaseFunctions";
import { useDispatch, useSelector } from "react-redux";
import { setCategories, setCurrentSort } from "../store/slices/categorySlice";
import { RootState } from "../store/store";

const SingleCategory = ({ category }: any) => {
  const dispatch = useDispatch();
  const sortByUpvotes = useSelector(
    (state: RootState) => state.categories.currentCategory
  );

  const selectedCategoryHandler = async () => {
    const currentCategory = await sortFeedBacksByCategory(
      category,
      sortByUpvotes
    );
    if (currentCategory) {
      dispatch(setCategories(currentCategory));
      dispatch(setCurrentSort(category));
    }
  };

  return (
    <motion.li
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-[#f2f4ff] text-xs rounded-lg px-3 py-1.5 font-semibold leading-[19px] list-none text-[#4661e6] mt-3 mr-3 cursor-pointer hover:bg-blue-200"
      onClick={selectedCategoryHandler}
    >
      {category}
    </motion.li>
  );
};

export default SingleCategory;
