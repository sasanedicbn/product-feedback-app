const SingleCategory = ({ category}) => {
    return (
        <li 
            className="bg-[#f2f4ff]  text-xs rounded-lg px-3 py-1.5 font-semibold leading-[19px] list-none text-[#4661e6] mt-3 mr-3 cursor-pointer hover:bg-blue-200">
            {category}
        </li>
    );
}

export default SingleCategory;
