import Link from "next/link";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

function HeroImage ({heroImageCollection = null}) {
    const actions = heroImageCollection?.heroImageCollection?.items[0]?.actionsCollection?.items;
    let contentAlignment;
    if (heroImageCollection?.heroImageCollection?.items[0]?.sectionAlignment == "Left") {
        contentAlignment = 'justify-start';
    } else if (heroImageCollection?.heroImageCollection?.items[0]?.sectionAlignment == "Center") {
        contentAlignment = 'justify-center';
    } else {
        contentAlignment = 'justify-end';
    }
    let textAlignment = "";
    let actionAlignment = "";
    if (heroImageCollection?.heroImageCollection?.items[0]?.textAlignment == "Center") {
        textAlignment = "text-center";
        actionAlignment = "justify-center";
    } else if (heroImageCollection?.heroImageCollection?.items[0]?.textAlignment == "Right") {
        textAlignment = "text-right";
        actionAlignment = "justify-end";
    }
    let document = heroImageCollection?.heroImageCollection?.items[0]?.subText ? heroImageCollection?.heroImageCollection?.items[0]?.subText?.json : null;
    
    return (
        <div className="w-full relative">
            <div className={`w-full h-full bg-black top-0 left-0 absolute ${heroImageCollection?.heroImageCollection?.items[0]?.darkenImage ? 'opacity-70' : 'opacity-0'}`}></div>
            <div className="w-full h-full absolute top-0 left-0">
                <div className="md:container md:mx-auto px-48 h-full">
                    <div className={`flex ${contentAlignment} items-center h-full`}>
                        <div className="flex flex-col justify-center">
                            <h1 className={`text-6xl md:w-[32rem] mb-2 ${textAlignment} ${heroImageCollection?.heroImageCollection?.items[0]?.darkenImage ? 'text-white' : 'text-black'}`}><strong>{heroImageCollection?.heroImageCollection?.items[0]?.headline}</strong></h1>
                            {document && <div className={`text-xl md:w-[32rem] mb-3 ${textAlignment} ${heroImageCollection?.heroImageCollection?.items[0]?.darkenImage ? 'text-white' : 'text-black'}`}>{documentToReactComponents(document)}</div>}
                            <div className={`${actionAlignment} ${heroImageCollection?.heroImageCollection?.items[0]?.actionAlignment == "Horizontal" ? "flex" : "flex flex-col"}`}>
                                {actions?.map((action, index) => {
                                    if (action.theme == "primary") {
                                        return (
                                            <button key={index} className="px-7 py-2 mr-3 mb-3 bg-blue-500 text-white font-semibold rounded shadow-md hover:bg-white hover:text-blue-600">{action.label}</button>
                                        )
                                    }
                                    return (
                                        <button key={index} className={`px-7 py-2 mr-3 mb-3 font-semibold rounded border-solid border-2 border-neutral-400 shadow-md hover:bg-blue-500 hover:text-white ${heroImageCollection?.heroImageCollection?.items[0]?.darkenImage ? 'text-white bg-grey-800' : 'text-black bg-white'}`}>{action.label}</button>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center max-h-[50rem] overflow-hidden">
                <img className="w-full" src={heroImageCollection?.heroImageCollection?.items[0]?.image?.image?.url} alt={heroImageCollection?.heroImageCollection?.items[0]?.image?.altText}/>
            </div>
        </div>
    )

}

export default HeroImage;