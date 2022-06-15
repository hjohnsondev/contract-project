import { image } from "../ContentTypes/headerTypes";

export interface bannerTypes {
    bannerData: {
        animateList: boolean,
        backgroundImage: { fields: image },
        contentMaxWidth: number,
        darkenImage: boolean,
        headline: string,
        headlineSize: string,
        internalName: string,
        maxWidth: number,
        sectionAlignment: string,
        testAlignment: string,
    }
}