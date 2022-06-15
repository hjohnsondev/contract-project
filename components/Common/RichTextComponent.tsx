import RichText from "./RchText";


const RichTextComponent = ({ className, entry }) => {
    // console.log(entry);
    return (
        <RichText entry={entry} className={className}/>
    );
}

export default RichTextComponent;