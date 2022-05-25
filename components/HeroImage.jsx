import Link from "next/link";
import Image from "next/image";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

function HeroImage ({heroData = null}) {
    const actions = heroData?.actions;
    let contentAlignment;
    if (heroData?.sectionAlignment == "Left") {
        contentAlignment = 'md:justify-start';
    } else if (heroData?.sectionAlignment == "Center") {
        contentAlignment = 'md:justify-center';
    } else {
        contentAlignment = 'md:justify-end';
    }
    let textAlignment = "md:text-left";
    let actionAlignment = "md:justify-start";
    if (heroData?.textAlignment == "Center") {
        textAlignment = "md:text-center";
        actionAlignment = "md:justify-center";
    } else if (heroData?.textAlignment == "Right") {
        textAlignment = "md:text-right";
        actionAlignment = "md:justify-end";
    }
    let document = heroData?.subText;
    
    return (
        <div className="w-full relative">
            <div className={`w-full h-full bg-black top-0 left-0 absolute opacity-70 md:${heroData?.darkenImage ? 'opacity-70' : 'opacity-0'}`}></div>
            <div className="w-full h-full absolute top-0 left-0">
                <div className="md:container md:mx-auto md:px-48 h-full">
                    <div className={`flex ${contentAlignment} justify-center items-center h-full`}>
                        <div className="flex flex-col">
                            {heroData?.headline && <h1 className={`md:text-6xl text-white text-lg text-center md:w-[32rem] mb-2 ${textAlignment} ${heroData?.darkenImage ? 'text-white' : 'md:text-black'}`}><strong>{heroData?.headline}</strong></h1>}
                            {document && <div className={`md:text-xl md:w-[32rem] mb-3 ${textAlignment} text-center ${heroData?.darkenImage ? 'text-white' : 'md:stext-black'}`}>{documentToReactComponents(document)}</div>}
                            {actions && <div className={`${actionAlignment} flex justify-center items-center md:${heroData?.actionAlignment == "Horizontal" ? "flex" : "flex md:flex-col"}`}>
                                {actions?.map((action, index) => {
                                    if (action?.fields?.theme == "primary") {
                                        return (
                                            <button key={index} className="md:px-7 px-1 py-2 mr-3 mb-3 bg-blue-500 text-white font-semibold rounded shadow-md hover:bg-white hover:text-blue-600">{action?.fields?.label}</button>
                                        )
                                    }
                                    return (
                                        <button key={index} className={`md:px-7 px-1 py-2 mr-3 mb-3 font-semibold rounded border-solid border-2 border-neutral-400 shadow-md hover:bg-blue-500 hover:text-white ${heroData?.darkenImage ? 'text-white bg-grey-800' : 'text-black bg-white'}`}>{action?.fields?.label}</button>
                                    )
                                })}
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center min-h-[20rem] md:max-h-[50rem] md:overflow-hidden">
                <img className="w-full h-full" src={heroData?.image?.fields?.image?.fields?.file?.url} alt={heroData?.image?.fields?.altText}/>
            </div>
        </div>
    )

}

export default HeroImage;