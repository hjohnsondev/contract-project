import { Entry, Asset } from "contentful";
import { Document } from '@contentful/rich-text-types';

export interface BackgroundImageProps extends Asset {}

export interface BannerFields {
    animateList: boolean,
    backgroundImage: BackgroundImageProps,
    contentMaxWidth: number,
    darkenImage: boolean,
    headline: string,
    headlineSize: string,
    internalName: string,
    maxWidth: number,
    sectionAlignment: string,
    testAlignment: string,
}

export interface BannerProps extends Entry<BannerFields> {}


// Using GraphQl atm... Cannot use Entry
export interface BlogListProps {
    blogs: BlogPreviewProps[],
    totalPages: number | string,
    currentPage: string,
    allCategories: string[]
}

export interface BlogPreviewProps {
    categoryCollection: { items: Category[] },
    date: string,
    excerpt: string,
    slug: string,
    thumbnail: {
        contentType: string,
        description: string,
        height: number,
        title: string,
        url: string,
        width: number
    },
    title: string
}

export interface BlogDetailsProps {
    date: string,
    categoryCollection: { items: Category[] }
}

interface Category {
    categoryName: string,
}

export interface BlogProps {
    blog: BlogFields,
    allCategories: string[],
    relatedPosts: RelatedPostFields[]
}

export interface BlogFields {
    categoryCollection: { items: Category[] },
    content: { json: Document },
    date: string,
    slug: string,
    thumbnail: {
        contentType: string,
        description: string,
        fileName: string,
        height: number,
        size: number,
        title: string,
        url: string,
        width: number,
    },
    title: string
}

export interface RelatedPostFields {
    date: string,
    slug: string,
    thumbnail: {
        description: string,
        height: number,
        title: string,
        url: string,
        width: number
    }
    title: string
}

// Header

export interface ImageWithFocalPointFields {
    altText: string,
    focalPoint: any,
    image: Asset,
    title: string,
}

export interface ImageWithFocalPointProps extends Entry<ImageWithFocalPointFields> {}

export interface MaterialIconFields {
    iconName: string,
    internalName: string,
}

export interface MaterialIconProps extends Entry<MaterialIconFields> {}

interface LinkFields {
    displayStyle: string,
    internalName: string,
    isExternal: boolean,
    label: string,
    materialDesignIcon: MaterialIconProps,
    target: string,
}

export interface LinkProps extends Entry<LinkFields> {}

interface NavigationItemFields {
    internalName: string,
    label: string,
    slug: string,
}

export interface NavigationItemProps extends Entry<NavigationItemFields> {}

interface NavigationMenuFields {
    icon: string,
    internalName: string,
    navigationItems: NavigationItemProps[],
}

export interface NavigationMenuProps extends Entry<NavigationMenuFields> {}

export interface HeaderCardFields {
    iconSize: string,
    imagePosition: string,
    internalName: string,
    materialDesignIcon: MaterialIconProps,
    subText: string,
    title: string,
    titleSize: string,
}

export interface HeaderCardProps extends Entry<HeaderCardFields> {}

export interface HeaderFields {
    actions: LinkProps[],
    internalName: string,
    logo: ImageWithFocalPointProps,
    logoCards: HeaderCardProps[],
    maxWidth: number,
    navigationMenu: NavigationMenuProps,
    tagline: string
}

export interface HeaderProps extends Entry<HeaderFields> {}

export interface TaglineProps {
    tagLine: string,
    icons: LinkProps[],
}

export interface HeaderIconProps {
    icon: LinkProps,
    key: number
}

export interface LogoAndCardsProps {
    logo: ImageWithFocalPointProps,
    logoCards: HeaderCardProps[]
}

export interface MenuProps {
    icon: string,
    navigationItems: NavigationItemProps[]
}

export interface ItemFields {
    item: NavigationItemProps,
    key: number
}

interface HeroActionFields {
    displayStyle: string,
    internalName: string,
    isExternal: boolean,
    label: string,
    target: string,
    theme: string
}

export interface HeroActionProps extends Entry<HeroActionFields> {}

// Hero Image

export interface heroImageFields {
    actionAlignment: string,
    actions: HeroActionProps[],
    contentMaxWidth: number,
    darkenImage: boolean,
    headline: string,
    headlineSize: string,
    image: ImageWithFocalPointProps,
    internalName: string,
    maxWidth: number,
    sectionAlignment: string,
    subText: Document,
    textAlignment: string,
}

export interface HeroImageProps extends Entry<heroImageFields> {}

// Set of Cards

export interface CardFields {
    iconSize: string,
    image: ImageWithFocalPointProps,
    materialDesignIcon: MaterialIconProps,
    imagePosition: string,
    internalName: string,
    subText: string,
    title: string,
    titleSize: string,
}

export interface CardProps extends Entry<CardFields> {}

export interface SetOfCardFields {
    cardDisplayStyle: string,
    cards: CardProps[],
    cardsInARow: number,
    internalName: string,
    maxWidth: number,
    title: string,
    titleSize: string
}

export interface SetOfCardProps extends Entry<SetOfCardFields> {}