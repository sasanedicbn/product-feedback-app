import { useDispatch } from "react-redux";
import Icon from "../../../UX/Icon";

const Upvotes = ({ upvotes, feedbackId }: { upvotes: number | null }) => {
  console.log(feedbackId, "feedbackid");
  const dispatch = useDispatch();
  const addLikeHandler = () => {
    // dispatch(addLike(feedbackId));
  };
  return (
    <div
      className="bg-blue-100 px-3 py-2 h-[54px] rounded-lg flex flex-col items-center cursor-pointer hover:bg-blue-200"
      onClick={addLikeHandler}
    >
      <Icon name="up" size={14} color="blue" />
      <span className="text-gray-600">{upvotes}</span>
    </div>
  );
};

export default Upvotes;
