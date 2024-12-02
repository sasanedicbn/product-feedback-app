import { useNavigate } from "react-router-dom";
import Action from "../UX/Action";
import Button from "../UX/Button";
import RoadMapContent from "./RoadMapItems/RoadMapContent";

const RoadmapPage = () => {
  const navigation = useNavigate();

  const feedBackPageHandler = () => {
    navigation("/add");
  };

  const homePageHandler = () => {
    navigation("/");
  };
  return (
    // <Wrapper type="pageWrapper">
    <div className="bg-gray-100 flex gap-5 flex-col px-32 pt-16 pb-10 font-serif">
      <div className="flex items-center justify-between bg-[#464f79] p-6 rounded-lg mb-4">
        <div className="">
          <Action
            iconName="back"
            iconColor="white"
            iconSize={14}
            text="Go back"
            labelType="backRoadMap"
            onClick={() => homePageHandler()}
          />
          <h2 className="text-white mt-2 font-semibold text-xl">Roadmap</h2>
        </div>
        <Button type="addFeedBack" onClick={() => feedBackPageHandler()}>
          Add Feedback
        </Button>
      </div>
      <RoadMapContent />
    </div>
    // </Wrapper>
  );
};

export default RoadmapPage;
