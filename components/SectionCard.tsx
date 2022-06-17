import ContentfulImage from "./ContentfulImage";

function SectionCard ({section = null}) {
    const previewImage = section?.image?.fields.image?.fields.file.url;
    const previewAltText = section?.image?.fields.altText;
    const previewWidth = section?.image?.fields.image?.fields.file.details.image.width;
    const previewHeight = section?.image?.fields.image?.fields.file.details.image.height;

    const image = section?.customIcon?.fields.file.url;
    const altText = section?.customIcon?.fields.description;
    const width = section?.customIcon?.fields.file.details.image.width;
    const height = section?.customIcon?.fields.file.details.image.height;

    return (
        <div className="relative flex items-center justify-center overflow-visible w-full h-[46rem]">
            <div className="md:absolute w-full h-full top-0 left-0">
                <div className="content-wrap">
                    <div className="flex flex-col md:flex-row justify-center md:h-full">
                        <div className="flex mx-5 md:mx-0 md:basis-5/6 p-10 flex-col md:space-y-16 space-y-5 p-10 bg-white md:max-w-[40rem] shadow-lg shadow-gray-200">
                            <h2>{section?.title}</h2>
                            <hr className="blue-hr w-[10%]"/>
                            <ContentfulImage
                                src={previewImage}
                                width={previewWidth}
                                height={previewHeight}
                                alt={previewAltText}
                                layout={'responsive'}
                                objectFit={'cover'}
                            />
                            <p className="text-gray-500">{section?.subText}</p>
                        </div>
                        <div className="hidden md:block">
                            <ContentfulImage
                                src={image}
                                width={width}
                                height={height}
                                alt={altText}
                                className={'md:flex md:self-start'}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden md:block w-full h-[36rem] md:bg-slate-100 top-0 left-0"></div>
        </div>
    )
}

export default SectionCard;