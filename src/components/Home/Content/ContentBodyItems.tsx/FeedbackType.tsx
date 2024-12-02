const FeedbackType = ({ type }) => {
  const bgColorHanlder = {
    Live: "bg-[#62bcfa]",
    Progress: "bg-[#ad1fea]",
    Planned: "bg-[#f49f85]",
  };

  return (
    <p className="flex items-center gap-2">
      <span className={`w-2 h-2 rounded-full ${bgColorHanlder[type]}`}></span>
      {type}
    </p>
  );
};

export default FeedbackType;
