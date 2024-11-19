import { motion } from "framer-motion";

const SingleCategory = ({ category }) => {
    console.log(category, 'trebalo bi da je single category')
    return (
        <motion.li
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-[#f2f4ff] text-xs rounded-lg px-3 py-1.5 font-semibold leading-[19px] list-none text-[#4661e6] mt-3 mr-3 cursor-pointer hover:bg-blue-200"
        >
            {category}
        </motion.li>
    );
}

export default SingleCategory;
