import UserFeedBack from "../../Home/Content/UserFeedBack";

const Live = ({ feedbacks }) => {
  const liveFeedbacks = feedbacks.filter((item) => item.type === "Live");
  console.log("feedbacks iz live", liveFeedbacks);

  return (
    <div className="w-full">
      <span>({liveFeedbacks.length})</span>
      <h3 className="text-lg font-semibold">Live</h3>
      <p className="text-sm text-gray-500">Ideas that have been released</p>
      <div className="mt-4">
        {liveFeedbacks.map((item) => (
          <UserFeedBack key={item.id} item={item} roadmap={true} />
        ))}
      </div>
    </div>
  );
};

export default Live;
