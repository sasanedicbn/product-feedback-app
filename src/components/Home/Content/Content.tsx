import ContentBody from "./ContentBody";
import ContentTitle from "./ContentTitle";

const Content = () => {
  return (
    <div className="w-max-[850px]   pb-12 md:px-4  lg:px-8">
      <ContentTitle />
      <ContentBody />
    </div>
  );
};

export default Content;
