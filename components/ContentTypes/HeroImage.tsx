import HeroImageActions from '../Common/HeroImageActions';
import cn from "classnames"
import DarkOverlay from '../Common/DarkOverlay';
import RichTextComponent from '../Common/RichTextComponent';
import { HeroImageProps } from '../../types/contentTypes';
import ContentfulImage from '../Common/ContentfulImage';

function HeroImage (props: HeroImageProps) {

    const {
        fields: {
            actions,
            darkenImage,
            headline,
            image,
            sectionAlignment,
            subText,
            textAlignment
        },
        sys,
        metadata
    } = props

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
            <div className="w-full h-full absolute z-10 top-0 left-0">
                <div className="content-wrap">
                    <div className={`flex ${contentAlignment} justify-center items-center h-full`}>
                        <div className="flex flex-col">
                            {headline && <h1 className={`headline ${textAlign} ${darkenImage ? 'text-dark' : 'text-light'}`}>{headline}</h1>}
                            {subText && <RichTextComponent entry={subText} className={`sub-title mb-3 ${textAlign} ${darkenImage ? 'text-dark' : 'text-light'}`}/>}
                            {actions && <HeroImageActions {...props}/>}
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center min-h-[20rem] md:h-[50rem] md:overflow-hidden">
                <ContentfulImage
                    src={image?.fields?.image?.fields?.file?.url}
                    width={null} //null due to layout === fill
                    height={null} //null due to layout === fill
                    alt={image?.fields?.altText}
                    layout={'fill'}
                    objectFit={'cover'}
                    className={'-z-10'}
                />
            </div>
        </div>
    )

}

export default HeroImage;