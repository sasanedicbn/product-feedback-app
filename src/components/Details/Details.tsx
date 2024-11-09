import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchFeedbackById } from "../../supabase/supabaseFunctions";

const Details = () => {
    const {id} = useParams()

    const fetchFeedBack = async () => {
      const feedBack = await fetchFeedbackById(id)
      console.log(feedBack, 'feedback')
    }  
    useEffect(() => {
    fetchFeedBack()
    }, [id])
    console.log(id, 'id iz paramsa')
    // ContentItem
    return(
        <div>
            Details
        </div>
    )
}

export default Details;