import { Link } from 'react-router-dom'; 
import Wrapper from "../../../UX/Wrapper";
import RoadmapItem from "./RoadmapItem/RoadmapItem";

const Roadmap = () => {
    return (
        <Wrapper type="sideBarItem">
            <section className="flex justify-between items-center color-bg mb-5">
                <p className="font-semibold text-blue-900">RoadMap</p>
                <Link to="/roadmap" className="text-xs text-blue-500 border-b border-blue-500">View</Link> 
            </section>
            <section>
                <RoadmapItem label="Planned" count={2} status="planned" />
                <RoadmapItem label="In-Progress" count={3} status="inProgress" />
                <RoadmapItem label="Live" count={1} status="live" />
            </section>
        </Wrapper>
    );
}

export default Roadmap;
