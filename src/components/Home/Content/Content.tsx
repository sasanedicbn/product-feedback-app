import ContentBody from "./ContentBody";
import ContentTitle from "./ContentTitle";

const Content = () => {
  return (
    <div className="w-full max-w-[800px] pb-12 px-4 sm:px-6 lg:px-8">
      <ContentTitle />
      <ContentBody />
    </div>
  );
};

export default Content;
