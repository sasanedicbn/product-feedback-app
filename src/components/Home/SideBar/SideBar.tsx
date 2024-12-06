import Category from "./SideBarItems/Category";
import Roadmap from "./SideBarItems/Roadmap";
import TitleSideBar from "./SideBarItems/TitleSideBar";

const SideBar = () => {
  return (
    <div className="w-full lg:w-[250px] bg-red-200">
      <TitleSideBar />
      <Category />
      <Roadmap />
    </div>
  );
};

export default SideBar;
