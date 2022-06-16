import { Entry } from "contentful"

export interface image {
    description: string,
    file: { 
        url: string,
        details: {
            image: {
                width: number,
                height: number
            }
        }
    },
    title: string,
}

export interface imageWithFocalPoint {
    altText: string,
    focalPoint: any,
    image: Entry<image>,
    title: string,
}

export interface materialIcon {
    iconName: string,
    internalName: string,
}

interface action {
    displayStyle: string,
    internalName: string,
    isExternal: boolean,
    label: string,
    materialDesignIcon: Entry<materialIcon>,
    target: string,
}

interface navigationItem {
    internalName: string,
    label: string,
    slug: string,
}

interface navigationMenu {
    icon: string,
    internalName: string,
    navigationItems: Entry<navigationItem>[],
}

export interface headerCard {
    iconSize: string,
    imagePosition: string,
    internalName: string,
    materialDesignIcon: Entry<materialIcon>,
    subText: string,
    title: string,
    titleSize: string,
}

export interface headerFields {
    actions: Entry<action>[],
    internalName: string,
    logo: Entry<imageWithFocalPoint>,
    logoCards: Entry<headerCard>[],
    maxWidth: number,
    navigationMenu: Entry<navigationMenu>,
    tagline: string
}

export interface header extends Entry<headerFields> { key: number }

export interface tagline {
    tagLine: string,
    icons: Entry<action>[],
}

export interface headerIcon {
    icon: Entry<action>,
    key: number
}

export interface logoAndCards {
    logo: Entry<imageWithFocalPoint>,
    logoCards: Entry<headerCard>[]
}

export interface menuTypes {
    icon: string,
    navigationItems: Entry<navigationItem>[]
}

export interface itemTypes {
    item: Entry<navigationItem>,
    key: number
}