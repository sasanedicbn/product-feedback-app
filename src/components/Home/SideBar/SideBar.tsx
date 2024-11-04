import Category from "./SideBarItems/Category";
import Roadmap from "./SideBarItems/Roadmap";
import TitleSideBar from "./SideBarItems/TitleSideBar";

const SideBar = () => {
    return(
        <div className="w-[235px] h-[300px] bg-slate-500">
         <TitleSideBar/>
         <Category/>
         <Roadmap/>
        </div>
    )
}
export default SideBar;