const FeedbackType = ({ type }) => {
  return (
    <p>
      <span className="w-10 h-10 bg-red-600 rounded-xl"></span>
      {type}
    </p>
  );
};
export default FeedbackType;
