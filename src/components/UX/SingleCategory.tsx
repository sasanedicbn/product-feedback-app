import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const SingleCategory = ({ category }) => {
     const feedbacks = useSelector((state) => state.categories.items).map((category) => category.Category)
    const selectedCategoryHandler = () => {
        feedbacks.map((feedback) => {
            if(feedback.Category === category){
                console.log('radi')
            }
        })
    }

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
