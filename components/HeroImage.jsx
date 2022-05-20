import Link from "next/link";
import Image from "next/image";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

function HeroImage ({heroData = null}) {
    console.log(heroData)
    const actions = heroData?.actions;
    let contentAlignment;
    if (heroData?.sectionAlignment == "Left") {
        contentAlignment = 'justify-start';
    } else if (heroData?.sectionAlignment == "Center") {
        contentAlignment = 'justify-center';
    } else {
        contentAlignment = 'justify-end';
    }
    let textAlignment = "";
    let actionAlignment = "";
    if (heroData?.textAlignment == "Center") {
        textAlignment = "text-center";
        actionAlignment = "justify-center";
    } else if (heroData?.textAlignment == "Right") {
        textAlignment = "text-right";
        actionAlignment = "justify-end";
    }
    let document = heroData?.subText;
    
    return (
        <div className="w-full relative">
            <div className={`w-full h-full bg-black top-0 left-0 absolute ${heroData?.darkenImage ? 'opacity-70' : 'opacity-0'}`}></div>
            <div className="w-full h-full absolute top-0 left-0">
                <div className="md:container md:mx-auto px-48 h-full">
                    <div className={`flex ${contentAlignment} items-center h-full`}>
                        <div className="flex flex-col justify-center">
                            {heroData?.headline &&<h1 className={`text-6xl md:w-[32rem] mb-2 ${textAlignment} ${heroData?.darkenImage ? 'text-white' : 'text-black'}`}><strong>{heroData?.headline}</strong></h1>}
                            {document && <div className={`text-xl md:w-[32rem] mb-3 ${textAlignment} ${heroData?.darkenImage ? 'text-white' : 'text-black'}`}>{documentToReactComponents(document)}</div>}
                            {actions && <div className={`${actionAlignment} ${heroData?.actionAlignment == "Horizontal" ? "flex" : "flex flex-col"}`}>
                                {actions?.map((action, index) => {
                                    if (action?.fields?.theme == "primary") {
                                        return (
                                            <button key={index} className="px-7 py-2 mr-3 mb-3 bg-blue-500 text-white font-semibold rounded shadow-md hover:bg-white hover:text-blue-600">{action?.fields?.label}</button>
                                        )
                                    }
                                    return (
                                        <button key={index} className={`px-7 py-2 mr-3 mb-3 font-semibold rounded border-solid border-2 border-neutral-400 shadow-md hover:bg-blue-500 hover:text-white ${heroData?.darkenImage ? 'text-white bg-grey-800' : 'text-black bg-white'}`}>{action?.fields?.label}</button>
                                    )
                                })}
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center max-h-[50rem] overflow-hidden">
                <img className="w-full" src={heroData?.image?.fields?.image?.fields?.file?.url} alt={heroData?.image?.fields?.altText}/>
            </div>
        </div>
    )

}

export default HeroImage;