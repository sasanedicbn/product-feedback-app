import InProgress from "./InProgress";
import Live from "./Live";
import Planned from "./Planned";

const RoadMapContent = () => {
  return (
    <div className="flex justify-between gap-8">
      <Planned />
      <InProgress />
      <Live />
    </div>
  );
};

export default RoadMapContent;
