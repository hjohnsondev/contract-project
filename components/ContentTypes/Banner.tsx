import type * as CSS from 'csstype';

export default function Banner ({ bannerData }) {

    const background: CSS.Properties = {
        'backgroundImage': `url(${bannerData.backgroundImage.fields.file.url})`
    }
    
    return (
        <div className="banner" style={background}>
            {bannerData.headline && 
                <div className="banner-wrap">
                    <h1 className={`text-white`}>{bannerData.headline}</h1>
                    <hr className="border-2 border-white m-0 w-[50%]"/>
                </div> 
            }
        </div>
    )
}