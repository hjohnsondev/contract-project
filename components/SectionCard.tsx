function SectionCard ({section = null}) {
    return (
        <div className="relative flex items-center justify-center overflow-visible w-full h-[46rem]">
            <div className="md:absolute w-full h-full top-0 left-0">
                <div className="md:container md:mx-auto md:px-48 h-full">
                    <div className="flex flex-col md:flex-row justify-center md:h-full">
                        <div className="flex mx-5 md:mx-0 md:basis-5/6 p-10 flex-col md:space-y-16 space-y-5 p-10 bg-white md:max-w-[40rem] shadow-lg shadow-gray-200">
                            <h2 className="text-4xl"><strong>{section?.title}</strong></h2>
                            <hr className="border-2 border-sky-500 w-[10%]"/>
                            <img src={`${section?.image?.fields.image?.fields.file.url}`} alt={`${section?.image?.fields.altText}`}/>
                            <p><strong>{section?.subText}</strong></p>
                        </div>
                        <img className="hidden md:flex md:self-start" src={`${section?.customIcon?.fields.file.url}`}/>
                    </div>
                </div>
            </div>
            <div className="hidden md:block w-full h-[36rem] md:bg-slate-100 top-0 left-0"></div>
        </div>
        
        
    )
}

export default SectionCard;