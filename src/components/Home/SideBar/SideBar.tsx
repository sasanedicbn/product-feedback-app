import Category from "./SideBarItems/Category";
import Roadmap from "./SideBarItems/Roadmap";
import TitleSideBar from "./SideBarItems/TitleSideBar";

const SideBar = () => {
  return (
    <div className="xl:flex flex-col lg:flex w-[300px]  bg-red-200  lg:gap-4">
      <TitleSideBar />
      <Category />
      <Roadmap />
    </div>
  );
};

export default SideBar;
