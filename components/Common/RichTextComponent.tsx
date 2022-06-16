import RichText from "./RchText";
import { Document } from '@contentful/rich-text-types';

const RichTextComponent = ({ className, entry }: { className: string, entry: Document }) => {
    // console.log(entry);
    return (
        <RichText entry={entry} className={className}/>
    );
}

export default RichTextComponent;