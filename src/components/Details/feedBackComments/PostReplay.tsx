import Button from "../../UX/Button";
import Textarea from "../../UX/Textarea";

const PostReplay = () => {
    return (
        <div className="w-full mt-6 p-4 bg-slate-100 border border-gray-200 rounded-lg">
            <Textarea placeholder="Your text here..." additionalStyles="bg-gray-50" />
            <div className="flex justify-end">
             <Button type="addFeedBack">
                 Post Reply
             </Button>
            </div>
        </div>
    );
}

export default PostReplay;
