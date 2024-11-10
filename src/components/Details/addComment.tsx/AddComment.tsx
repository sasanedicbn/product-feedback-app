import { useState } from "react";
import FeedBackTitle from "../../FeedBack/FeedBackItems/FeedBackTitle";
import Wrapper from "../../UX/Wrapper";
import LengthComments from "./LengthComments";

const AddComment = () => {
    const [lengthComment, setLengthComment] = useState(0);

    const updateLengthComment = (e) => {
        setLengthComment(e.target.value.length);
    };
    console.log(lengthComment)

    return (
        <Wrapper type="feedBackComments">
            <FeedBackTitle
                title="Add Comment"
                subtitle="Share with us your opinion about this feedback"
            />
            <textarea
                className="w-full p-2 border rounded-lg bg-gray-200 text-gray-700 h-28 mb-6"
                placeholder="Add comment"
                onChange={updateLengthComment}
                maxLength={225} 
            />
            <LengthComments length={lengthComment} />
        </Wrapper>
    );
};
export default AddComment;
