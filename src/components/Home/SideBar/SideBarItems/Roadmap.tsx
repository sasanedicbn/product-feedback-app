import { Link } from 'react-router-dom'; 
import { motion } from "framer-motion";
import Wrapper from "../../../UX/Wrapper";
import RoadmapItem from "./RoadmapItem/RoadmapItem";

const Roadmap = () => {
    return (
        <Wrapper type="sideBarItem">
            <motion.section
                initial={{ opacity: 0, x: -70 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex justify-between items-center color-bg mb-5"
            >
                <p className="font-semibold text-blue-900">RoadMap</p>
                <Link to="/roadmap" className="text-xs text-blue-500 border-b border-blue-500">View</Link> 
            </motion.section>

            <motion.section
                initial={{ opacity: 0, x: -70 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    staggerChildren: 0.2
                }}
            >
                <RoadmapItem label="Planned" count={2} status="planned" />
                <RoadmapItem label="In-Progress" count={3} status="inProgress" />
                <RoadmapItem label="Live" count={1} status="live" />
            </motion.section>
        </Wrapper>
    );
}

export default Roadmap;
