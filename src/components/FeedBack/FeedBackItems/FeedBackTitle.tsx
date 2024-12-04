import { motion } from "framer-motion";
import Label from "../../UX/Label";

const FeedBackTitle = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <motion.section
      className="mb-4 w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.0, duration: 0.6 }}
    >
      <Label text={title} type="addFeedBack" />
      <p className="text-sm text-gray-500 mb-2">{subtitle}</p>
    </motion.section>
  );
};

export default FeedBackTitle;
