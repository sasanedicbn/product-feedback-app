import Button from "../../UX/Button";

const LengthComments = ({length}:any) => {
    return(
     <div className="w-full flex items-center justify-between">
       <p className="text-gray-500 font-light">{length}/225 max characters </p>
       <Button type="addFeedBack">Post Comment</Button>
     </div>
    )
}

export default LengthComments;