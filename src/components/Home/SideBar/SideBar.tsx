import Category from "./SideBarItems/Category";
import Roadmap from "./SideBarItems/Roadmap";
import TitleSideBar from "./SideBarItems/TitleSideBar";

const SideBar = () => {
  return (
    <div className="bg-slate-500 flex flex-row gap-4 items-center  lg:flex-col lg:bg-red-200 lg:max-w-[290px] justify-center px-4">
      <TitleSideBar />
      <Category />
      <Roadmap />
    </div>
  );
};

export default SideBar;
