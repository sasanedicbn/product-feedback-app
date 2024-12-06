import Content from "./Content/Content";
import SideBar from "./SideBar/SideBar";

const Home = () => {
  return (
    <div className="bg-gray-100 flex flex-col lg:flex-row justify-center gap-6 px-2 pt-16 font-serif">
      <div className="w-full lg:w-[250px] mb-4">
        <SideBar />
      </div>
      <div className="w-full lg:w-[800px] font-bold">
        <Content />
      </div>
    </div>
  );
};

export default Home;
