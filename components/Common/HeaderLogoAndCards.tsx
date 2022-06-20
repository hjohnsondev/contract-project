import { LogoAndCardsProps } from "../../types/contentTypes"
import ContentfulImage from "../ContentfulImage"
import HeaderCard from "./HeaderCard"

// <img src={logo} alt={altText}/>

export default function HeaderLogoAndCards ({ logo, logoCards }: LogoAndCardsProps) {

    const {
        fields: {
            altText,
            image: {
                fields: {
                    file: {
                        url,
                        details: {
                            image: {
                                width,
                                height
                            }
                        }
                    }
                }
            }
        }
    } = logo

    return (
        <div className="hidden md:block w-full bg-white top-0 left-0 relative h-full">
            <div className="content-wrap">
                <div className="flex justify-between items-center h-full">
                    <ContentfulImage
                        src={url}
                        width={width}
                        height={height}
                        alt={altText}
                    />
                    <div className="flex items-center space-x-20 h-full">
                        {logoCards?.map((card, index) => {
                            return (<HeaderCard card={card} key={index}/>)
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}