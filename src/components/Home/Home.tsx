import Content from "./Content/Content";
import SideBar from "./SideBar/SideBar";

const Home = () => {
    return(
     <div className="bg-gray-100 flex justify-between h-[1000px] px-32 pt-16 font-serif">
      <div className="mb-4">
        <SideBar/>
      </div>
       <div className="font-bold">
        <Content/>
       </div>
    </div>
    )
}

export default Home;