import { mdiConsoleNetwork } from "@mdi/js";
import Link from "next/link";

function CardsSection ({cardData = null, style}) {

    const cards = cardData?.cards;

    if (style == "icon") {
        return (
            <div className="w-full bg-white top-0 left-0 h-full">
                <div className="md:container md:mx-auto px-48 h-full">
                    {cardData?.title && <div className="flex mt-16 flex-col items-center justify-center space-y-6">
                        <h2 className=" text-4xl"><strong>{cardData?.title}</strong></h2>
                        <hr className="border-2 border-sky-500 w-[5%]"/>
                    </div>}
                    <div className={`flex p-5 ${cardData?.cardDisplayStyle == "Vertical" ? "flex-col justify-center space-y-16" : ""} ${cardData?.cardsInARow < cardData?.cards.length && cardData?.cardDisplayStyle == "Horizontal" ? "flex-wrap justify-around" : ""} ${cardData?.cardsInARow >= cardData?.cards.length ? "space-x-10" : ""}`}>
                        <>
                            {cards.map((card, index) => {
                                return (
                                    <div key={index} className={`flex basis-1/${cardData?.cardsInARow} space-y-6 flex-col items-center h-full max-w-[32rem] bg-white hover:shadow-md`}>
                                        <div className={`text-5xl text-sky-500 mt-6 mdi mdi-${card?.fields?.materialDesignIcon?.fields?.iconName}`}></div>
                                        <h3 className="text-2xl"><strong>{card?.fields?.title}</strong></h3>
                                        <p className="text-center max-w-[70%] m-5 text-gray-500">{card?.fields?.subText}</p>
                                    </div>
                                )
                            })}
                        </>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className="w-full bg-white top-0 left-0 relative h-full">
            <div className="md:container md:mx-auto px-48 h-full">
                {cardData?.title && <div className="flex flex-col items-center justify-center space-y-6">
                    <h2 className=" text-4xl"><strong>{cardData?.title}</strong></h2>
                    <hr className="border-2 border-sky-500 w-[5%]"/>
                </div>}
                <div className={`py-10 flex items-center h-full ${cardData?.cardDisplayStyle == "Vertical" ? "flex-col justify-center space-y-16" : ""} ${cardData?.cardsInARow < cardData?.cards?.length && cardData?.cardDisplayStyle == "Horizontal" ? "flex-wrap justify-around" : ""} ${cardData?.cardsInARow >= cardData?.cards?.length ? "space-x-10" : ""}`}>
                    {cardData?.cards?.map((card, index) => {
                        return (
                            <div key={index} className={`flex basis-1/${cardData?.cardsInARow} space-y-6 max-w-[32rem] flex-col m-0`}>
                                <img className="w-full rounded" src={`${card?.fields?.image?.fields?.image?.fields?.file?.url}`} alt={`${card?.fields?.image?.fields?.altText}`}/>
                                <h3 className="text-2xl"><strong>{card?.fields?.title}</strong></h3>
                                <hr className="border-2 border-sky-500 max-w-[15%]"/> 
                                <p className="text-gray-500">{card?.fields?.subText}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
    
}

export default CardsSection;