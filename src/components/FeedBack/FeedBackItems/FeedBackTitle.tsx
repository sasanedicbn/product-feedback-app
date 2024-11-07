import Label from "../../UX/Label";

const FeedBackTitle = ({ title, subtitle }:any) => {
    return (
        <section className="mb-4">
            <Label text={title} type="addFeedBack" />
            <p className="text-sm text-gray-500 mb-2">{subtitle}</p>
        </section>
    );
};


export default FeedBackTitle;
