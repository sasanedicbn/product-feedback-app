import { useNavigate } from "react-router-dom";
import SingleCategory from "../../../UX/SingleCategory";

const ContentItem = ({ title, feedback, category, itemId = null }) => {
    console.log(itemId, 'itemid ic contentitem')
    const navigate = useNavigate();

    const handleItemClick = () => {
        // Navigacija ka stranici details sa ID-jem kategorije
        navigate(`/details/${itemId}`);
    };

    return (
        <div
            onClick={handleItemClick} 
            className="text-dark-blue bg-red-400 w-[600px] cursor-pointer" 
        >
            <h2 className="text-blue-950 text-xl font-bold">{title}</h2>
            <p className="text-gray-500 text-sm font-light my-1">{feedback}</p>
            <div className="flex flex-wrap justify-start">
                <SingleCategory category={category} />
            </div>
        </div>
    );
};

export default ContentItem;

