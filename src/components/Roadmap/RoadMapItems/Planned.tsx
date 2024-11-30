import UserFeedBack from "../../Home/Content/UserFeedBack";

const Planned = ({ feedbacks }) => {
  return (
    <div className="w-full">
      <span>({feedbacks.length})</span>
      <h3 className="text-lg font-semibold">Planned</h3>
      <p className="text-sm text-gray-500">Ideas prioritized for research</p>
      <div className="mt-4">
        {feedbacks.map((item) => (
          <UserFeedBack key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Planned;
