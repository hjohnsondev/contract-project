import Image from 'next/image';
import { ContentfulImageProps } from '../../types/CommonTypes/types';

const ContentfulImage = (props: ContentfulImageProps) => {
  //console.log(props);
  const { alt = "decorative", height, layout, quality, src, width, objectPosition } = props;

  const contentfulLoader = () => {
    const format = '&fm=webp'
    return layout === 'fill'
      ? `https:${src}?&q=${quality || 75}${format}`
      : `https:${src}?w=${width}&q=${quality || 75}${format}`;
  };

  return (<Image loader={contentfulLoader} {...props} alt={alt} />);

};

export default ContentfulImage;