import { motion } from "framer-motion";
import { useState } from "react";
import { sortFeedBacksByCategory } from "../../supabase/supabaseFunctions";

const SingleCategory = ({ category }) => {
    const [currentCategory, setCurrentCategory] = useState('')
    const selectedCategoryHandler = () => {
        sortFeedBacksByCategory(category)
    };
    console.log('currentCategoriiiii', currentCategory)

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
