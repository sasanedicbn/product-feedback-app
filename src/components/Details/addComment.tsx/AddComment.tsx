import { useState } from "react";
import FeedBackTitle from "../../FeedBack/FeedBackItems/FeedBackTitle";
import Wrapper from "../../UX/Wrapper";
import LengthComments from "./LengthComments";

const AddComment = () => {
    const [lengthComment, setLengthComment] = useState(225);

    const updateLengthComment = (e) => {
        const remainingLength = 225 - e.target.value.length;
        setLengthComment(remainingLength >= 0 ? remainingLength : 0);
    };

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
