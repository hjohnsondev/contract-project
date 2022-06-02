import Image from "next/image";
import imageLoader from "../imageLoader";
import styles from "../styles/scroller.module.css";

export default function FancyCardScroller ({scrollerData}) {
    console.log(scrollerData);
    

    const cards = scrollerData.cards[0].fields.cards;

    return (
        <article className="w-full h-full pb-20 mb-32 relative">
            <div className="w-full h-full sticky z-10 top-0">
                <div className="w-full h-full absolute mb-32 z-10 top-0">
                    <div className="flex justify-end md:container md:mx-auto md:px-48 mt-32 relative bg-transparent z-20">  
                        <div className="max-w-[45rem] bg-transparent shadow-lg p-5 backdrop-brightness-50 rounded mt-20">
                            <h2 className="text-6xl text-white text-right mb-5"><strong>{scrollerData.headline}</strong></h2>
                            <p className="text-lg text-white text-right">{scrollerData.subtext}</p>
                        </div>
                    </div>
                    <div className="flex content-end md:container md:mx-auto md:px-48 bg-transparent relative z-20">  
                        <div className="max-w-[45rem] bg-transparent shadow-lg p-5 backdrop-brightness-50 rounded mt-32">
                            <h2 className="text-5xl text-white mb-5"><strong>{scrollerData.cardsHeadline}</strong></h2>
                            <p className="text-lg text-white">{scrollerData.cardsSubtext}</p>
                        </div>
                    </div>
                    <div className="md:container md:mx-auto md:px-48">
                        <div className="w-[32rem] h-[16rem] subtract"></div>
                    </div>
                </div>
                <img className="w-full blur-lg opacity-60 saturate-0 scale-y-110 brightness-50 relative" src={scrollerData.backgroundImage.fields.file.url} alt={scrollerData.backgroundImage.fields.file.fileName} loader={imageLoader}/>
            </div>
            <div className={`md:container md:mx-auto md:px-48`}>
                <div className={`flex flex-col mb-20 space-y-10`}>
                    {cards.map((card, index) => {
                        return (
                            <div>
                                <div key={index} className={`flex flex-col sticky p-5 max-w-[32rem] rounded-lg space-y-6 bg-white shadow-md`}>
                                    <h3 className="text-2xl"><strong>{card?.fields?.title}</strong></h3>
                                    <p className="text-gray-500">{card?.fields?.subText}</p>
                                </div>
                                <div className="h-[5rem]"></div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </article>
    )
}
