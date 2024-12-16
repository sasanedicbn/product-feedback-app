import { useDispatch, useSelector } from "react-redux";
import Icon from "../../../UX/Icon";
import { addLike } from "../../../store/slices/categorySlice";

const Upvotes = ({ upvotes, feedbackId }: { upvotes: number | null }) => {
  console.log(feedbackId, "feedbackid");
  const dispatch = useDispatch();
  const alldata = useSelector((state) => state.categories.items);
  const addLikeHandler = () => {
    dispatch(addLike(feedbackId));
    console.log(alldata, "alldata na klik");
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
