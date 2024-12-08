import Content from "./Content/Content";
import SideBar from "./SideBar/SideBar";

const Home = () => {
  return (
    <div className="bg-gray-100 flex flex-col px-0 lg:flex-row justify-center gap-6 font-serif md:pt-16 md:px-2">
      <div className="flex flex-col lg:flex-row justify-center">
        <SideBar />
        <Content />
      </div>
    </div>
  );
};

export default Home;
