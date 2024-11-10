import Wrapper from "../../UX/Wrapper";

const FeedBackComments = ({ feedback }) => {
    const { Comments } = feedback;

    if (!Comments) return <p>No comments available.</p>;

    return (
        <Wrapper type="feedBackContainer">
            <div className="flex items-start p-4 shadow-sm">
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

                        <button className="text-blue-600 font-semibold hover:text-blue-800 transition duration-150">
                            Reply
                        </button>
                    </div>
                    
                    <p className="mt-2 text-gray-700">{Comments.user_comment}</p>
                </div>
            </div>
        </Wrapper>
    );
};

export default FeedBackComments;
