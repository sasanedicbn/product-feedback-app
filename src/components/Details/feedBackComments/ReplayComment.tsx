import Button from "../../UX/Button";

const ReplayComment = ({Comments}) => {
    if (!Comments) return <p>No comments available.</p>;

    return(
    <div className="w-full mt-6 pl-6 border-b border-gray-200 pb-8 mb-8 break-all">
          <div className="flex w-full border-l border-gray-200">
                <img
                    src={Comments.user_image}
                    alt="User"
                    className="w-12 h-12 ml-10 rounded-full mr-4 object-cover"
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
                    
                    <p className="text-gray-500 text-sm font-light mt-4 ">klldasjdklasjdklasjdklasjkldasjkldjaskldjaskldjklasjdklsajdklasjdklsjakldjaskldjaskldjaskdjaskldjaldjaskldjklasjdklasjaskl</p>
                </div>
            </div>
    </div>
    )
}

export default ReplayComment;