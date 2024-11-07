import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import Wrapper from "../../../UX/Wrapper";
import RoadmapItem from "./RoadmapItem/RoadmapItem";

const Roadmap = () => {
    return (
        <Wrapper type="sideBarItem">
            <motion.section
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex justify-between items-center color-bg mb-5"
            >
                <p className="font-semibold text-blue-900">RoadMap</p>
                <Link to="/roadmap" className="text-xs text-blue-500 border-b border-blue-500">View</Link> 
            </motion.section>
            <section>
                {["Planned", "In-Progress", "Live"].map((label, index) => (
                    <motion.div
                        key={label}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                    >
                        <RoadmapItem 
                            label={label} 
                            count={label === "Planned" ? 2 : label === "In-Progress" ? 3 : 1} 
                            status={label} 
                        />
                    </motion.div>
                ))}
            </section>
        </Wrapper>
    );
}

export default Roadmap;

