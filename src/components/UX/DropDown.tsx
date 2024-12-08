import { useState } from "react";
import { motion } from "framer-motion";
import Icon from "./Icon";
import { DropDownProps, OptionType } from "../types/types";
import { sortFeedBacksByCategory } from "../../supabase/supabaseFunctions";
import { useDispatch, useSelector } from "react-redux";
import {
  setCategories,
  setCurrentCategory,
} from "../store/slices/categorySlice";
import { RootState } from "../store/store";

const DropDown = ({
  options,
  selectedOption,
  onOptionSelect,
}: DropDownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const currentSort = useSelector(
    (state: RootState) => state.categories.currentSort
  );

  const handleOptionClick = async (option: OptionType) => {
    try {
      onOptionSelect(option);
      const sortFeedback = await sortFeedBacksByCategory(currentSort, option);
      if (sortFeedback) {
        dispatch(setCategories(sortFeedback));
      }
      dispatch(setCurrentCategory(option));
      setIsOpen(false);
    } catch (error) {
      console.error("Error fetching sorted feedbacks:", error);
    }
  };

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-xs sm:text-sm"
      >
        <span className="text-gray-300">Sort by:</span>{" "}
        <strong className="text-gray-200">{selectedOption}</strong>
        <Icon name={isOpen ? "up" : "down"} size={16} color="#e1e1e6" />
      </button>
      <motion.ul
        className="absolute bg-white w-[200px] h-[150px] mt-9 rounded-lg shadow-xl border border-solid border-gray-200"
        initial={{ maxHeight: 0, opacity: 0 }}
        animate={{ maxHeight: isOpen ? 500 : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ overflow: "hidden" }}
      >
        {options.map((option, index) => (
          <motion.li
            key={option}
            onClick={() => handleOptionClick(option)}
            className="p-2 cursor-pointer flex justify-between items-center text-xs sm:text-sm font-light text-gray-500 border-b border-solid border-gray-300 last:border-b-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.3,
              delay: index * 0.1,
              ease: "easeOut",
            }}
          >
            {option}
            {selectedOption === option && (
              <Icon name="check" size={14} color="#a855f7" />
            )}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default DropDown;
