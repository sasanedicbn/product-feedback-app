import ContentBody from "./ContentBody";
import ContentTitle from "./ContentTitle";

const Content = () => {
  return (
    <div className="w-full lg:w-[800px] pb-12">
      <ContentTitle />
      <ContentBody />
    </div>
  );
};

export default Content;
