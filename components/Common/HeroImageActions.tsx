import cn from "classnames"
import { heroImageType } from "../../types/ContentTypes/heroImageTypes";

export default function HeroImageActions ({ heroData }: heroImageType) {
    const actions = heroData?.actions;
    
    let actionAlignment = cn('', {
        'md:justify-center': heroData?.textAlignment == "Center",
        'md:justify-end': heroData?.textAlignment == "Right",
        'md:md:justify-start': heroData?.textAlignment == "Left",
    })

    return (
        <div className={`${actionAlignment} flex justify-center items-center space-x-3 md:${heroData?.actionAlignment == "Horizontal" ? "flex" : "flex md:flex-col"}`}>
            {actions?.map((action, index) => {
                if (action?.fields?.theme == "primary") {
                    return (
                        <button key={index} className="btn btn-primary">{action?.fields?.label}</button>
                    )
                }
                return (
                    <button key={index} className={`btn btn-secondary ${heroData?.darkenImage ? 'btn-secondary-dark' : 'btn-secondary-light'}`}>{action?.fields?.label}</button>
                )
            })}
        </div>
    )
}