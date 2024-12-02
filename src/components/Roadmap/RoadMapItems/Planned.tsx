import UserFeedBack from "../../Home/Content/UserFeedBack";

const Planned = ({ feedbacks }) => {
  return (
    <div className="w-full">
      <h3 className="text-lg font-semibold text-blue-950 opacity-85">
        Planned{" "}
        <span>
          ({feedbacks.filter((item) => item.type === "Planned").length})
        </span>
      </h3>
      <p className="text-sm text-gray-500">Ideas prioritized for research</p>
      <div className="mt-4">
        {feedbacks
          .filter((item) => item.type === "Planned")
          .map((item) => (
            <UserFeedBack key={item.id} item={item} roadmap={true} />
          ))}
      </div>
    </div>
  );
};

export default Planned;
