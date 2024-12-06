import Content from "./Content/Content";
import SideBar from "./SideBar/SideBar";

const Home = () => {
  return (
    <div className="bg-gray-100 flex flex-col lg:flex-row justify-center gap-6 px-2 pt-16 font-serif">
      <div className="flex flex-col lg:flex-row justify-center">
        <SideBar />
        <Content />
      </div>
    </div>
  );
};

export default Home;
