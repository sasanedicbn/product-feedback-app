import Input from "../../UX/Input";
import Label from "../../UX/Label";

const FeedBackTitle = () => {
    return(
        <section className="mb-4">
        <Label text="Feedback Title" type="addFeedBack"/>
        <p className="text-sm text-gray-500 mb-2">Add a short, descriptive headline</p>
        <Input
            type="text" 
            name="title" 
            styleType="addFeedBack" 
            placeholder="Enter feedback title"
        />
    </section>
    )
}

export default FeedBackTitle;