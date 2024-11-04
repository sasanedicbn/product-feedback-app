import Wrapper from "../../UX/Wrapper"
import ContentBody from "./ContentBody"
import ContentTitle from "./ContentTitle"

const Content = () => {
    return(
       <Wrapper type="content">
        <ContentTitle/>
        <ContentBody/>
       </Wrapper>
    )
}

export default Content