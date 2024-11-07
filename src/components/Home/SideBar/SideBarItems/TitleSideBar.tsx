import { motion } from "framer-motion";
import Wrapper from "../../../UX/Wrapper";

const TitleSideBar = () => {
    return (
        <Wrapper type="sideBarTitle">
            <motion.p
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-xl text-gray-500 font-medium"
            >
                Feedback Board
            </motion.p>
        </Wrapper>
    );
}

export default TitleSideBar;
