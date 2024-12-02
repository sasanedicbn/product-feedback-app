import UserFeedBack from "../../Home/Content/UserFeedBack";

const InProgress = ({ feedbacks }) => {
  const inProgressFeedbacks = feedbacks.filter(
    (item) => item.type === "Progress"
  );

  return (
    <div className="w-full">
      <span>({inProgressFeedbacks.length})</span>
      <h3 className="text-lg font-semibold">In Progress</h3>
      <p className="text-sm text-gray-500">Currently being developed</p>
      <div className="mt-4">
        {inProgressFeedbacks.map((item) => (
          <UserFeedBack key={item.id} item={item} roadmap={true} />
        ))}
      </div>
    </div>
  );
};

export default InProgress;
