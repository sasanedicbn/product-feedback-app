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
    <div className="bg-gray-100 flex gap-5 flex-col px-0 pt-0 pb-10  font-serif sm:px-0 md:px-16 md:pt-16 lg:px-16 ">
      <div className="flex items-center justify-between bg-[#464f79] p-6 mb-4 md:rounded-lg ">
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
  );
};

export default RoadmapPage;
