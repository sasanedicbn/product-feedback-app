import SingleCategory from "../../../UX/SingleCategory";

const ContentItem = () => {
    return (
        <div className="text-dark-blue">
            <h2 className="text-blue-950 text-xl font-bold">Preview images is not loading</h2>
            <p className="text-gray-500 text-sm font-light my-1">Challenge preview images are missing when you apply a filter.</p>
            <div className="flex flex-wrap justify-start">
             <SingleCategory category="Enhancement"/>
            </div>
        </div>
    );
}

export default ContentItem;
