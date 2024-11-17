import { useState } from "react";
import FeedBackTitle from "../../FeedBack/FeedBackItems/FeedBackTitle";
import Wrapper from "../../UX/Wrapper";
import LengthComments from "./LengthComments";
import Textarea from "../../UX/Textarea";
import { useSelector } from "react-redux";
import { postComment } from "../../../supabase/supabaseFunctions";

const AddComment = ({id}) => {
    const [lengthComment, setLengthComment] = useState(225);
    const [updateComment, setUpdateComment] = useState({});
    const currentUser = useSelector((user) => user.user.user);
    console.log('CURRENT USER', currentUser);

    const updateCommentHandler = (e) => {
        const comment = e.target.value;
        console.log('comment za text-area', comment);
        console.log('postComment objekat', updateComment)
        setUpdateComment({
            // id: '1',
            user: currentUser.full_name,
            user_name: currentUser.user_name,
            user_image: currentUser.user_image,
            user_comment: comment,
            feedback_id: id
        });
    };

    const postCommentHandler = async() => {
        console.log('iz fn', updateComment)
        postComment(updateComment)
       }
    const updateLengthComment = (e) => {
        const remainingLength = 225 - e.target.value.length;
        setLengthComment(remainingLength >= 0 ? remainingLength : 0);
    };

    const handleChange = (e) => {
        updateLengthComment(e);
        updateCommentHandler(e);
    };

    return (
        <Wrapper type="feedBackComments">
          
            <Textarea
                placeholder="Add comment"
                rows={4}
                additionalStyles="bg-gray-200 text-gray-700 h-28 mb-6"
                onChange={handleChange} 
                maxLength={225}
            />
            <LengthComments length={lengthComment} postCommentHandler={postCommentHandler} />
        </Wrapper>
    );
};

export default AddComment;
