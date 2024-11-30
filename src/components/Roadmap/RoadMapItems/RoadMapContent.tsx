import { useSelector } from "react-redux";
import InProgress from "./InProgress";
import Live from "./Live";
import Planned from "./Planned";

const RoadMapContent = () => {
  const feedbacks = useSelector((state) => state.feedback.feedback);
  console.log(feedbacks, "iz roadmapa feedbacks");
  return (
    <div className="flex justify-between gap-8">
      <Planned />
      <InProgress />
      <Live />
    </div>
  );
};

export default RoadMapContent;
