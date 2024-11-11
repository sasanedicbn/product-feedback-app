import Button from "../../UX/Button";
import Wrapper from "../../UX/Wrapper";
import ReplayComment from "./ReplayComment";

const FeedBackComments = ({ feedback }) => {
    const { Comments } = feedback;

    if (!Comments) return <p>No comments available.</p>;

    return (
        <Wrapper type="feedBackComments">
            <div className="flex w-full break-all">
                <img
                    src={Comments.user_image}
                    alt="User"
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                
                <div className="flex-1">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="font-semibold text-blue-950">{Comments.user}</p>
                            <p className="text-gray-500 text-sm font-light">{Comments.user_name}</p>
                        </div>

                        <Button type="replay">
                            Reply
                        </Button>
                    </div>
                    
                    <p className="text-gray-500 text-sm font-light mt-4">dasdksdkdasdasdasdasdasasddklasdklsklajdklajdksajdklasjdkljaskldjaskljdklasjdklajskldjaskldjaskdjaklsjdlkjaklsd</p>
                </div>
            </div>
            <ReplayComment Comments={Comments}/>
        </Wrapper>
    );
};

export default FeedBackComments;
