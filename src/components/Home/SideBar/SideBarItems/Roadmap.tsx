import Wrapper from "../../../UX/Wrapper";
import RoadmapItem from "./RoadmapItem/RoadmapItem";

const Roadmap = () => {
    return(
        <Wrapper type="sideBarItem">
            <section className="bg-orange-200 flex justify-between mb-5">
                <p>RoadMap</p>
                <a href='/view'>View</a>
            </section>
            <section className="bg-blue-300">
                <RoadmapItem label="Planned" count={2} />
                <RoadmapItem label="In-Progress" count={3} />
                <RoadmapItem label="Live" count={1} />
            </section>
        </Wrapper>
    )
}

export default Roadmap;