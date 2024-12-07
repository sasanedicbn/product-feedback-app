import Category from "./SideBarItems/Category";
import Roadmap from "./SideBarItems/Roadmap";
import TitleSideBar from "./SideBarItems/TitleSideBar";

const SideBar = () => {
  return (
    <div className="flex flex-row gap-4 justify-center lg:justify-start lg:flex-col  lg:max-w-[290px] px-4">
      <TitleSideBar />
      <Category />
      <Roadmap />
    </div>
  );
};

export default SideBar;
