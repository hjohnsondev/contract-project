import ContentfulImage from "./ContentfulImage";
import { BackgroundImageProps } from "

const BackgroundImage = ({ bgImage, zIndex = '-z-10' }: BackgroundImageProps) => {
    // guard against anything but a zIndex being passed
    if (!/^(\-*)z/ig.test(zIndex)) { zIndex = '-z-10' };
    
    return (
        <ContentfulImage
            src={bgImage?.fields.image.fields.file.url}
            width={null} //null due to layout === fill
            height={null} //null due to layout === fill
            alt={bgImage?.fields.altText}
            layout={'fill'}
            objectFit={'cover'}
            className={zIndex}
        />
    );
}

export default BackgroundImage;