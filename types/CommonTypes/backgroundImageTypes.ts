import { image, imageWithFocalPoint } from "../ContentTypes/headerTypes";

export interface BackgroundImageTypes {
	bgImage: {
		fields: imageWithFocalPoint | image;
	};
	zIndex?: string;
}