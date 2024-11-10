import Button from "../../UX/Button";
import Wrapper from "../../UX/Wrapper";

const FeedBackComments = ({ feedback }) => {
    const { Comments } = feedback;

    if (!Comments) return <p>No comments available.</p>;

    return (
        <Wrapper type="feedBackContainer">
            <div className="flex bg-red-200 w-full ">
                <img
                    src={Comments.user_image}
                    alt="User"
                    className="w-12 h-12 rounded-full mr-4"
                />
                
                <div className="flex-1">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="font-semibold text-dark-blue">{Comments.user}</p>
                            <p className="text-gray-500 text-sm">{Comments.user_name}</p>
                        </div>

                        <Button type="replay" >
                            Reply
                        </Button>
                    </div>
                    
                    <p className="mt-2 text-gray-700">{Comments.user_comment}</p>
                </div>
            </div>
        </Wrapper>
    );
};

export default FeedBackComments;
