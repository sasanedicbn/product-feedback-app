import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Wrapper from "../../../UX/Wrapper";
import RoadmapItem from "./RoadmapItem/RoadmapItem";
import { useSelector } from "react-redux";

const Roadmap = () => {
  const feedbacks = useSelector((state) => state.categories.items);
  const inProgressFeedbacks = feedbacks.filter(
    (item) => item.type === "Progress"
  );
  const liveFeedbacks = feedbacks.filter((item) => item.type === "Live");
  const plannedFeedbacks = feedbacks.filter((item) => item.type === "Planned");
  return (
    <Wrapper type="sideBarItem">
      <motion.section
        initial={{ opacity: 0, x: -70 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.62, ease: "easeOut" }}
        className="flex justify-between items-center color-bg mb-5"
      >
        <p className="font-semibold text-blue-900">RoadMap</p>
        <Link
          to="/roadmap"
          className="text-xs text-blue-500 border-b border-blue-500"
        >
          View
        </Link>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, x: -70 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.62,
          ease: "easeOut",
          staggerChildren: 0.2,
        }}
      >
        <RoadmapItem
          label="Planned"
          count={plannedFeedbacks.length}
          status="planned"
        />
        <RoadmapItem
          label="In-Progress"
          count={inProgressFeedbacks.length}
          status="inProgress"
        />
        <RoadmapItem label="Live" count={liveFeedbacks.length} status="live" />
      </motion.section>
    </Wrapper>
  );
};

export default Roadmap;
