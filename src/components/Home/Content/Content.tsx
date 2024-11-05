import Wrapper from "../../UX/Wrapper"
import ContentBody from "./ContentBody"
import ContentTitle from "./ContentTitle"

const Content = () => {
    return(
        <div className="w-[800px] bg-orange-300">
        <ContentTitle/>
        <ContentBody/>
       </div>
    )
}

export default Content