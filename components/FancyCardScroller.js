import Image from "next/image";
import imageLoader from "../imageLoader";

export default function FancyCardScroller ({scrollerData}) {
    console.log(scrollerData);

    return (
        <article className="w-full relative">
            <div className="sticky w-full h-full top-0 flex items-center saturate-0">
                <img className="w-full blur-sm opacity-70" src={scrollerData.backgroundImage.fields.file.url} alt={scrollerData.backgroundImage.fields.file.fileName} loader={imageLoader}/>
            </div>

            <div className="w-full min-h-[84rem] bg-white">
                
            </div>
        </article>
    )
}
