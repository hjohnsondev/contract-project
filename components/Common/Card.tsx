export default function Card ({ card, key, cardsInARow }) {
    let image = card?.fields?.image?.fields?.image?.fields?.file?.url;
    let altText = card?.fields?.image?.fields?.altText;
    let icon = card?.fields?.materialDesignIcon?.fields?.iconName
    let subText = card?.fields?.subText

    return (
        <div key={key} className={`card basis-1/${cardsInARow} ${image ? '' : 'card-with-icon'} `}>
            {!image && <div className={`card-icon mdi mdi-${icon}`}></div>}
            {image && <img className="w-full rounded" src={image} alt={altText}/>}
            <h3>{card?.fields?.title}</h3>
            {image && <hr className="border-2 border-sky-500 max-w-[15%]"/>}
            <p className={`${image ? 'text-gray-500' : 'card-with-icon-text'}`}>{subText}</p>
        </div>
    )
}