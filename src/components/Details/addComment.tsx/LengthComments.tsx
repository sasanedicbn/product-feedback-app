import Button from "../../UX/Button";

const LengthComments = () => {
    return(
     <div className="w-full flex items-center justify-between">
       <p className="text-gray-500 font-light">225 characters left</p>
       <Button type="addFeedBack">Post Comment</Button>
     </div>
    )
}

export default LengthComments;