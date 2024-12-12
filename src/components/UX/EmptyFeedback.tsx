import Button from "./Button";
import Icon from "./Icon";
import { useNavigate } from "react-router-dom";
import Wrapper from "./Wrapper";

const EmptyFeedback = () => {
  const navigation = useNavigate();
  const feedBackPageHandler = () => {
    navigation("/add");
  };
  return (
    <Wrapper type="feedBackContainer">
      <div className=" flex flex-col items-center justify-center h-[430px] px-24 gap-2">
        <Icon name="search" size={84} color="#464f79" />
        <p className="font-bold text-2xl leading-9 text-center tracking-tight text-[#464f79] mt-6">
          There is no feedback yet.
        </p>
        <p className="font-normal text-base leading-6 text-center text-[#647196] mb-6">
          Got a suggestion? Found a bug that needs to be squashed? We love
          hearing about new ideas to improve our app.
        </p>
        <Button type="addFeedBack" onClick={feedBackPageHandler}>
          <Icon name="plus" size={14} color="white" />
          <span className="text-sm ml-1">Add Feedback</span>
        </Button>
      </div>
    </Wrapper>
  );
};

export default EmptyFeedback;
