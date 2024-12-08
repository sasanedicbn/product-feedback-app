import Category from "./SideBarItems/Category";
import Roadmap from "./SideBarItems/Roadmap";
import TitleSideBar from "./SideBarItems/TitleSideBar";

const SideBar = () => {
  return (
    <div className="flex flex-row gap-4 justify-center px-0 750px:px-4 lg:justify-start lg:flex-col lg:max-w-[290px]">
      <TitleSideBar />
      <Category />
      <Roadmap />
    </div>
  );
};

export default SideBar;
