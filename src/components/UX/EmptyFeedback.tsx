import { FiSearch } from "react-icons/fi";
import Button from "./Button";
import Icon from "./Icon";
import { useNavigate } from "react-router-dom";
import Wrapper from "./Wrapper";

const EmptyFeedback = () => {
    const navigation = useNavigate()
    const feedBackPageHandler = () => {
        navigation('/add')
      }
    return(
        <Wrapper type="feedBackContainer">
            <div className="flex flex-col items-center justify-center h-[430px] px-28">
             <Icon name='search' size={48} color="blue"/>
              <p>There is no feedback yet.</p>
              <p>Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.</p>
              <Button type="addFeedBack" onClick={feedBackPageHandler}>
                    <Icon name="plus" size={14} color="white" />
                    <span className="text-sm ml-1">Add Feedback</span>
              </Button>
            </div>
        </Wrapper>
    )
}

export default EmptyFeedback;