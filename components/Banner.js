import Image from "next/image"
import imageLoader from "../imageLoader"

export default function Banner ({ bannerData }) {
    return (
        <div className="bg-cover bg-center w-full h-[13rem] overflow-hidden flex justify-center items-center" style={{"background-image": `url(${bannerData.backgroundImage.url})`}}>
            <div className="flex flex-col justify-center items-center">
                <h1 className={`text-6xl mb-5 text-white`}><strong>{bannerData.headline}</strong></h1>
                <hr className="border-2 border-white w-[50%]"/>
            </div>
        </div>
    )
}