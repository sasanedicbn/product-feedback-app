import { useState } from "react";
import FeedBackTitle from "../../FeedBack/FeedBackItems/FeedBackTitle";
import Wrapper from "../../UX/Wrapper";
import LengthComments from "./LengthComments";
import Textarea from "../../UX/Textarea";

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
            <Textarea
                placeholder="Add comment"
                rows={4}
                additionalStyles="bg-gray-200 text-gray-700 h-28 mb-6"
                onChange={updateLengthComment}
                maxLength={225}
            />
            <LengthComments length={lengthComment} />
        </Wrapper>
    );
};

export default AddComment;
