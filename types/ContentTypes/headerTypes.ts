export interface image {
    description: string,
    file: { url: string },
    title: string,
}

export interface imageWithFocalPoint {
    altText: string,
    focalPoint: any,
    image: { fields: image },
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
    materialDesignIcon: { fields: materialIcon },
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
    navigationItems: { fields: navigationItem }[],
}

export interface headerCard {
    iconSize: string,
    imagePosition: string,
    internalName: string,
    materialDesignIcon: { fields: materialIcon },
    subText: string,
    title: string,
    titleSize: string,
}

export interface header {
    headerData: {
        actions: { fields: action }[],
        internalName: string,
        logo: { fields: imageWithFocalPoint },
        logoCards: { fields: headerCard }[],
        maxWidth: number,
        navigationMenu: { fields: navigationMenu },
        tagline: string
    }
}

export interface tagline {
    tagLine: string,
    icons: { fields: action }[],
}

export interface headerIcon {
    icon: { fields: action },
    key: number
}

export interface logoAndCards {
    logo: string,
    altText: string,
    headerCards: { fields: headerCard }[]
}

export interface menuTypes {
    icon: string,
    navigationItems: { fields: navigationItem }[]
}

export interface itemTypes {
    item: { fields: navigationItem },
    key: number
}