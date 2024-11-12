import Button from "../../UX/Button";

const PostReplay = () => {
    return (
        <div className="w-full mt-6 p-4 bg-slate-100 border border-gray-200 rounded-lg">
            <textarea
                className="w-full p-3 mb-4 border border-purple-500 rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="3"
                placeholder="Write your reply..."
            ></textarea>
            <Button type="addFeedBack">
                Post Reply
            </Button>
        </div>
    );
}

export default PostReplay;
