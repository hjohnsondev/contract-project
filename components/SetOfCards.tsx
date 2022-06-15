import cn from "classnames";

function CardsSection ({cardData: { cardDisplayStyle, cards, cardsInARow, title = null }}) {
    
    const displayStyle = cn('flex p-5 flex-col', {
        'md:flex-col md:justify-center md:space-y-16': cardDisplayStyle == "Vertical",
        'md:flex-wrap md:justify-around md:flex-row': cardsInARow < cards.length && cardDisplayStyle == "Horizontal",
        'md:space-x-10 md:justify-around md:flex-row': cardsInARow >= cards.length,
    })

    return (
        <div className="w-full bg-white top-0 left-0 h-full">
            <div className="content-wrap">
                {title && <div className="flex mt-16 flex-col items-center justify-center">
                    <h2><strong>{title}</strong></h2>
                    <hr className="border-2 border-sky-500 w-[5%]"/>
                </div>}
                <div className={`${displayStyle}`}>
                    {cards.map((card, index) => {
                        let image = card?.fields?.image?.fields?.image?.fields?.file?.url;

                        return (
                            <div key={index} className={`flex basis-1/${cardsInARow} ${image ? '' : 'items-center'} space-y-6 flex-col h-full max-w-[32rem] bg-white border-2 border-white hover:border-gray-300`}>
                                {!image && <div className={`text-5xl text-sky-500 mt-6 mdi mdi-${card?.fields?.materialDesignIcon?.fields?.iconName}`}></div>}
                                {image && <img className="w-full rounded" src={`${image}`} alt={`${card?.fields?.image?.fields?.altText}`}/>}
                                <h3>{card?.fields?.title}</h3>
                                {image && <hr className="border-2 border-sky-500 max-w-[15%]"/>}
                                <p className={`${image ? 'text-gray-500' : 'card-with-icon-text'}`}>{card?.fields?.subText}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
    
    
}

export default CardsSection;