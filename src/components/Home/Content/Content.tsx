import ContentBody from "./ContentBody";
import ContentTitle from "./ContentTitle";

const Content = () => {
  return (
    <div className="max-w-[850px] pb-12 md:px-4 lg:px-8 xl:w-[850px]">
      <ContentTitle />
      <ContentBody />
    </div>
  );
};

export default Content;
