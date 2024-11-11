import Action from "../UX/Action";
import Button from "../UX/Button";

const RoadmapPage = () => {
    return(
        // <Wrapper type="pageWrapper">
        <div className="bg-gray-100 flex gap-5 flex-col h-screen px-32 pt-16 font-serif">
            <div className="flex items-center justify-between bg-[#464f79] p-6 rounded-lg mb-4">
                <div className="">
                    <Action 
                        iconName="back" 
                        iconColor="white" 
                        iconSize={14} 
                        text="Go back"
                        labelType='backRoadMap'
                        onClick={() => console.log("Back action triggered")}
                    />
                    <h2 className="text-white mt-2 font-semibold text-xl">Roadmap</h2>
                </div>
                <Button type="addFeedBack" onClick={() => console.log("Feedback added")}>
                    Add Feedback
                </Button>
            </div>
        </div>
        // </Wrapper>
    )
}

export default RoadmapPage;
