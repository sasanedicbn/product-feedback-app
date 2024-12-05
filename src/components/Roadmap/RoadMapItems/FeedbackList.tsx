import UserFeedBack from "../../Home/Content/UserFeedBack";

const FeedbackList = ({ title, description, type, feedbacks }) => {
  const filteredFeedbacks = feedbacks.filter((item) => item.type === type);

  return (
    <div className="w-full">
      <h3 className="text-lg font-semibold text-blue-950 opacity-85">
        {title} <span>({filteredFeedbacks.length})</span>
      </h3>
      <p className="text-sm text-gray-500">{description}</p>
      <div className="mt-4">
        {filteredFeedbacks.map((item) => (
          <UserFeedBack key={item.id} item={item} roadmap={true} />
        ))}
      </div>
    </div>
  );
};

export default FeedbackList;
