import { cardTypes } from "../../types/ContentTypes/setOfCardsTypes";
import ContentfulImage from "../ContentfulImage";

export default function Card ({ card, cardsInARow }: cardTypes) {
    
    let image = card?.fields?.image?.fields.image.fields.file.url;
    let altText = card?.fields?.image?.fields.altText;
    let width = card?.fields?.image?.fields.image.fields.file.details.image.width;
    let height = card?.fields?.image?.fields.image.fields.file.details.image.height;

    let icon = card?.fields?.materialDesignIcon?.fields.iconName;
    let subText = card.fields.subText;

    return (
        <div className={`card ${`md:basis-1/${cardsInARow}`} ${image ? '' : 'card-with-icon'} `}>
            {!image && <div className={`card-icon mdi mdi-${icon}`}></div>}
            {image && 
                <ContentfulImage 
                    src={image}
                    width={width}
                    height={height}
                    alt={altText}
                    layout={'responsive'}
                    objectFit={'cover'}
                    className={'rounded'}
                />
            }
            <h3>{card?.fields?.title}</h3>
            {image && <hr className="blue-hr max-w-[15%]"/>}
            <p className={`${image ? 'text-gray-500' : 'card-with-icon-text'}`}>{subText}</p>
        </div>
    )
}