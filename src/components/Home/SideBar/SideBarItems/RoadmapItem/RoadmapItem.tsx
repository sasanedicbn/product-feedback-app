const RoadmapItem = ({ label, count }) => (
    <div className="flex justify-between">
        <p>{label}</p>
        <p>{count}</p>
    </div>
);
export default RoadmapItem