import ContentBody from "./ContentBody";
import ContentTitle from "./ContentTitle";

const Content = () => {
  return (
    <div className="w-full  pb-12 px-4 sm:px-4 lg:px-8">
      <ContentTitle />
      <ContentBody />
    </div>
  );
};

export default Content;
