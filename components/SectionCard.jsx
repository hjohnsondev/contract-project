import Link from "next/link";
function SectionCard ({sectionData = null}) {
    const section = sectionData?.cardCollection?.items?.find((card) => card.customIcon)

    return (
        <div className="relative flex items-center justify-center overflow-visible w-full h-[46rem]">
            <div className="absolute w-full h-full top-0 left-0">
                <div className="md:container md:mx-auto px-48 h-full">
                    <div className="flex justify-center h-full">
                        <div className="flex basis-5/6 p-10 flex-col space-y-16 p-10 bg-white max-w-[40rem] shadow-lg shadow-gray-200">
                            <h2 className="text-4xl"><strong>{section.title}</strong></h2>
                            <hr className="border-2 border-sky-500 w-[10%]"/>
                            <img src={`${section.image.image.url}`} alt={`${section.image.altText}`}/>
                            <p><strong>{section.subText}</strong></p>
                        </div>
                        <img className="flex self-start" src={`${section.customIcon.url}`}/>
                    </div>
                </div>
            </div>
            <div className="w-full h-[36rem] bg-slate-100 top-0 left-0"></div>
        </div>
        
        
    )
}

export default SectionCard;