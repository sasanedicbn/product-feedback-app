import { HiLightBulb } from "react-icons/hi";

const ContentTitle = () => {
    return (
        <div className="flex items-center justify-between bg-slate-400 p-4">
            <div className="flex items-center space-x-3">
            <HiLightBulb size={24} color="#ffcc00" />
                <p className="text-white text-lg font-semibold">6 Suggestions</p>
            </div>
            <div className="flex items-center">
                <p className="text-sm text-gray-200">Sort by: <strong className="text-white">Most Upvotes</strong></p>
            </div>
        </div>
    );
};

export default ContentTitle;
