import Wrapper from "../UX/Wrapper"
import SideBar from "./SideBar/SideBar";

const Home = () => {
    return(
     <div className="bg-gray-100 h-screen px-32 pt-24 font-serif">
      <div>
        <SideBar/>
      </div>
       <div className="font-bold">
       </div>
    </div>
    )
}

export default Home;