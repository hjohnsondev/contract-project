import { imageWithFocalPoint } from "./headerTypes"
import { Document } from '@contentful/rich-text-types';

interface heroAction {
    displayStyle: string,
    internalName: string,
    isExternal: boolean,
    label: string,
    target: string,
    theme: string
}

export interface heroImageType {
    heroData: {
        actionAlignment: string,
        actions: { fields: heroAction }[],
        contentMaxWidth: number,
        darkenImage: boolean,
        headline: string,
        headlineSize: string,
        image: { fields: imageWithFocalPoint },
        internalName: string,
        maxWidth: number,
        sectionAlignment: string,
        subText: Document,
        textAlignment: string,
    }
}