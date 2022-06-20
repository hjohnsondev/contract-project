import cn from "classnames"
import { HeroImageProps } from "../../types/contentTypes"

export default function HeroImageActions (props: HeroImageProps) {

    const {
        fields: {
            actions,
            darkenImage,
            actionAlignment,
            textAlignment
        },
        sys,
        metadata
    } = props
    
    let alignment = cn('flex justify-center', {
        'md:space-x-3': actionAlignment == "Horizontal",
        'md:justify-start': textAlignment == "Left",
        'md:justify-center': textAlignment == "Center",
        'md:justify-end': textAlignment == "Right",
        'md:items-start md:flex-col': textAlignment == "Left" && actionAlignment == "Vertical",
        'md:items-center md:flex-col': textAlignment == "Center" && actionAlignment == "Vertical",
        'md:items-end md:flex-col': textAlignment == "Right" && actionAlignment == "Vertical",
    })

    return (
        <div className={alignment}>
            {actions?.map((action, index) => {
                let theme = action?.fields?.theme;
                let button = cn('btn', {
                    'btn-primary': action?.fields?.theme == "primary",
                    'btn-secondary btn-secondary-dark': darkenImage && theme != "primary",
                    'btn-secondary btn-secondary-light': !darkenImage && theme != "primary",
                    'ml-3': index > 0 && actionAlignment !== "Vertical",
                    'mt-3': index > 0 && actionAlignment != "Horizontal"
                })
                return (
                    <button key={index} className={button}>{action?.fields?.label}</button>
                )
            })}
        </div>
    )
}