import Icon from "../../../UX/Icon";

const Upvotes = () => {
    return(
        <div className="bg-blue-100 px-3 py-2 h-[54px] rounded-lg flex flex-col items-center cursor-pointer hover:bg-blue-200">
            <Icon name="up" size={14} color='blue'/>
            <span className="text-gray-600">5</span>
        </div>
    )
}

export default Upvotes;