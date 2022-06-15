import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import HeroImageActions from './HeroImageActions';
import cn from "classnames";
import DarkOverlay from './DarkOverlay';

function HeroImage ({heroData = null}) {
    let document = heroData?.subText;

    const {
        actions,
        darkenImage,
        headline,
        image,
        sectionAlignment,
        subText,
        textAlignment
    } = heroData

    let contentAlignment = cn('', {
            'md:justify-start': sectionAlignment === "Left",
            'md:justify-center': sectionAlignment === "Center",
            'md:justify-end': sectionAlignment === 'right',
        })
    let textAlign = cn('', {
            'md:text-center': textAlignment == "Center",
            'md:text-right': textAlignment == "Right",
            'md:md:text-left': textAlignment == "Left",
        })
    
    return (
        <div className="w-full relative">
            {darkenImage && <DarkOverlay/>}
            <div className="w-full h-full absolute top-0 left-0">
                <div className="content-wrap">
                    <div className={`flex ${contentAlignment} justify-center items-center h-full`}>
                        <div className="flex flex-col">
                            {headline && <h1 className={`headline ${textAlign} ${darkenImage ? 'text-dark' : 'text-light'}`}>{headline}</h1>}
                            {subText && <div className={`sub-title ${textAlign} ${darkenImage ? 'text-dark' : 'text-light'}`}>{documentToReactComponents(document)}</div>}
                            {actions && <HeroImageActions heroData={heroData}/>}
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center min-h-[20rem] md:max-h-[50rem] md:overflow-hidden">
                <img className="w-full h-full" src={image?.fields?.image?.fields?.file?.url} alt={image?.fields?.altText}/>
            </div>
        </div>
    )

}

export default HeroImage;