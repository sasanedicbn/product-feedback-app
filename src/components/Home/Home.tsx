import Content from "./Content/Content";
import SideBar from "./SideBar/SideBar";

const Home = () => {
  return (
    <div className="bg-gray-100 flex justify-center gap-6 px-2 pt-16 font-serif">
      <div className="mb-4">
        <SideBar />
      </div>
      <div className="font-bold">
        <Content />
      </div>
    </div>
  );
};

export default Home;
