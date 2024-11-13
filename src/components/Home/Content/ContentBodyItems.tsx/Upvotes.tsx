import Icon from "../../../UX/Icon";

const Upvotes = ({upvotes}) => {
     
    // const { Comments } = item;  
    // const commentsLength = Comments.length;  

    console.log(upvotes, 'iteeeeeeeeeeem upvotes');

    return (
        <div className="bg-blue-100 px-3 py-2 h-[54px] rounded-lg flex flex-col items-center cursor-pointer hover:bg-blue-200">
            <Icon name="up" size={14} color='blue'/>
            <span className="text-gray-600">{upvotes}</span>
        </div>
    );
}

export default Upvotes;
