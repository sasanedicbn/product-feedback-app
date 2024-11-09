import { useParams } from "react-router-dom";

const Details = () => {
    const {id} = useParams()
    console.log(id, 'id iz paramsa')
    return(
        <div>
            Details
        </div>
    )
}

export default Details;