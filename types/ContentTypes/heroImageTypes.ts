import { imageWithFocalPoint } from "./headerTypes"
import { Document } from '@contentful/rich-text-types';
import { Entry } from "contentful"

interface heroAction {
    displayStyle: string,
    internalName: string,
    isExternal: boolean,
    label: string,
    target: string,
    theme: string
}

export interface heroImageTypeFields {
    actionAlignment: string,
    actions: Entry<heroAction>[],
    contentMaxWidth: number,
    darkenImage: boolean,
    headline: string,
    headlineSize: string,
    image: Entry<imageWithFocalPoint>,
    internalName: string,
    maxWidth: number,
    sectionAlignment: string,
    subText: Document,
    textAlignment: string,
}

export interface heroImageType extends Entry<heroImageTypeFields> { key: number }