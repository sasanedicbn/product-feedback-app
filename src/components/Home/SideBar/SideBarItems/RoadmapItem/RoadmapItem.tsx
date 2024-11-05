import { RoadmapItemProps } from "../../../../types/types";

const RoadmapItem = ({ label, count, status }:RoadmapItemProps) => {
    const statusClasses = {
        planned: "bg-orange-400",
        inProgress: "bg-purple-500",
        live: "bg-blue-300",
    };

    return (
        <div className="flex justify-between items-center mb-2">
            <div className="flex items-center">
                <span className={`w-2 h-2 rounded-full mr-2 ${statusClasses[status]}`}></span>
                <p className="text-sm">{label}</p>
            </div>
            <p>{count}</p>
        </div>
    );
}

export default RoadmapItem;
