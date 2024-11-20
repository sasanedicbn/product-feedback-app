import { FiSearch } from "react-icons/fi";
import Button from "./Button";
import Icon from "./Icon";
import { useNavigate } from "react-router-dom";

const EmptyFeedback = () => {
    const navigation = useNavigate()
    const feedBackPageHandler = () => {
        navigation('/add')
      }
    return(
        <div>
              <FiSearch size={50} />
              <p>There is no feedback yet.</p>
              <p>Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.</p>
              <Button type="addFeedBack" onClick={feedBackPageHandler}>
                    <Icon name="plus" size={14} color="white" />
                    <span className="text-sm ml-1">Add Feedback</span>
            </Button>
        </div>
    )
}

export default EmptyFeedback;