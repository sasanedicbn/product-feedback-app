import SingleCategory from "../../../UX/SingleCategory";

const ContentItem = ({title, feedback, category}) => {
  
    return (
        <div className="text-dark-blue">
            <h2 className="text-blue-950 text-xl font-bold">{title}</h2>
            <p className="text-gray-500 text-sm font-light my-1">{feedback}</p>
            <div className="flex flex-wrap justify-start">
             <SingleCategory category={category}/>
            </div>
        </div>
    );
}

export default ContentItem;
