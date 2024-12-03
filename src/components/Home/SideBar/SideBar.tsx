import { useSelector } from "react-redux";
import Category from "./SideBarItems/Category";
import Roadmap from "./SideBarItems/Roadmap";
import TitleSideBar from "./SideBarItems/TitleSideBar";

const SideBar = () => {
  const feedbacks = useSelector((state) => state.feedback.feedback);

  return (
    <div className="w-[250px]">
      <TitleSideBar />
      <Category />
      <Roadmap feedbacks={feedbacks} />
    </div>
  );
};
export default SideBar;
