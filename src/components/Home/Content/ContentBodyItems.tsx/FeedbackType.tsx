type FeedbackTypeProps = {
  type: "Live" | "Progress" | "Planned";
};

const FeedbackType = ({ type }: FeedbackTypeProps) => {
  const bgColorHanlder: Record<FeedbackTypeProps["type"], string> = {
    Live: "bg-[#62bcfa]",
    Progress: "bg-[#ad1fea]",
    Planned: "bg-[#f49f85]",
  };

  return (
    <p className="flex items-center gap-2 text-sm text-gray-500 mb-2">
      <span
        className={`w-[25px] h-2 rounded-full ${bgColorHanlder[type]} `}
      ></span>
      {type}
    </p>
  );
};

export default FeedbackType;
