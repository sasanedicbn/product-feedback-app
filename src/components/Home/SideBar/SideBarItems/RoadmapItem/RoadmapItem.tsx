import { RoadmapItemProps } from "../../../../types/types";

const RoadmapItem = ({ label, count }:RoadmapItemProps) => (
    <div className="flex justify-between">
        <p>{label}</p>
        <p>{count}</p>
    </div>
);
export default RoadmapItem