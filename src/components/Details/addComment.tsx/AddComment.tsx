import Wrapper from "../../UX/Wrapper";

const AddComment = () => {
    return(
        <Wrapper type="feedBackComments">
         <p>SASA</p>
         <p>SASA</p>
         <textarea 
           className="w-full p-2 border rounded-lg bg-gray-200 text-gray-700 h-32 mb-6"
           placeholder="Add comment"
          />
        </Wrapper>
          
    )
}
export default AddComment;