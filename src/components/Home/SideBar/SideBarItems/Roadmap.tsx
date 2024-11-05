import Wrapper from "../../../UX/Wrapper";

const Roadmap = () => {
    return(
        <Wrapper type="sideBarItem">
          <section className="bg-orange-200 flex justify-between mb-5">
            <p>RoadMap</p>
            <a href='/view'>View</a>
          </section>
            <section className="bg-blue-300">
            <div className="flex justify-between ">
                <p>Planned</p>
                <p>2</p>
            </div>
            <div className="flex justify-between ">
                <p>In-Progress</p>
                <p>3</p>
            </div>
            <div className="flex justify-between ">
                <p>Live</p>
                <p>1</p>
            </div>
            </section>
        </Wrapper>
    )
}

export default Roadmap;