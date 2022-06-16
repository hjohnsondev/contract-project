import { ImageProps } from 'next/image';

export interface ContentfulImageProps {
	alt: string;
	caption?: string;
	className?: string;
	height: ImageProps['height'];
	layout?: ImageProps['layout'];
	objectFit?: ImageProps['objectFit'];
	objectPosition?: ImageProps['objectPosition'];
	quality?: ImageProps['quality'];
	src: ImageProps['src'];
	width: ImageProps['width'];
}