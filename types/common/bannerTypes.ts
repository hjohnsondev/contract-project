import { Entry } from "contentful";
import { image } from "../ContentTypes/headerTypes";

export interface bannerFields {
    animateList: boolean,
    backgroundImage: Entry<image>,
    contentMaxWidth: number,
    darkenImage: boolean,
    headline: string,
    headlineSize: string,
    internalName: string,
    maxWidth: number,
    sectionAlignment: string,
    testAlignment: string,
}

export interface bannerTypes extends Entry<bannerFields> {}