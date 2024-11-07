import { FaPlusCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const AnimationCircle = () => {
    return (
        <motion.div
            initial={{ scale: 0 }}
            animate={{
                scale: [0, 1.2, 1],
                background: [
                    "#6B21A8",  
                    "#8B5CF6",  
                    "#1E3A8A",  
                    "#EC4899",  
                    "#06B6D4",  
                    "#6B21A8"   
                ],
            }}
            transition={{
                duration: 0.8,
                ease: "easeOut",
                bounce: 0.6,
                background: {
                    duration: 12,  
                    repeat: Infinity,
                    repeatType: "reverse",
                },
            }}
            className="absolute top-3 right-[400px] rounded-full w-16 h-16 flex items-center justify-center cursor-pointer shadow-lg"
        >
            <FaPlusCircle size={26} color="white" />
        </motion.div>
    );
}

export default AnimationCircle;
