import type * as CSS from 'csstype';
import { BannerProps } from '../../types/contentTypes';

export default function Banner (props: BannerProps) {

    // console.log(props.fields);

    const {
        fields: {
            backgroundImage,
            headline,
        },
        sys,
        metadata
    } = props;

    const background: CSS.Properties = {
        'backgroundImage': `url(${backgroundImage.fields.file.url})`
    }
    
    return (
        <div className="banner" style={background}>
            {headline && 
                <div className="banner-wrap">
                    <h1 className={`text-white`}>{headline}</h1>
                    <hr className="border-2 border-white m-0 w-[50%]"/>
                </div> 
            }
        </div>
    )
}