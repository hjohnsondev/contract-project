import cn from "classnames";
import Card from "./Card";

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
                    <h2>{title}</h2>
                    <hr className="blue-hr w-[5%]"/>
                </div>}
                <div className={displayStyle}>
                    {cards.map((card, index) => {
                        return (<Card card={card} key={index} cardsInARow={cardsInARow}/>)
                    })}
                </div>
            </div>
        </div>
    )
    
    
}

export default CardsSection;