import Icon from "../../../UX/Icon";

const Comments = ({comments}) => {
    return(
        <div className="flex gap-1">
            <Icon name="message" color="gray" size={22}/>
            <span className="text-gray-500">{comments}</span>
        </div>
    )
}

export default Comments;