//Types used -- pull from quicktype

/*
export interface GetBlogs {   <= use this in getStaticProps when declaring the incoming data.
    info: ;
    blogs: Blogs[];
}
*/

/*
for pagination:

export interface Info {
    count: ;
    pages: ;
    next: ;
    prev: ;
}
*/

export interface Data {
    items: Item[];
}

export interface Item {
    metadata: Metadata;
    sys:      ItemSys;
    fields:   Fields;
}

export interface Fields {
    internalName?:       string;
    iconName?:           string;
    logo?:               Image;
    tagline?:            string;
    navigationMenu?:     Image;
    actions?:            Image[];
    maxWidth?:           number;
    logoCards?:          Image[];
    title?:              string;
    titleSize?:          string;
    subText?:            string;
    materialDesignIcon?: Image;
    iconSize?:           string;
    imagePosition?:      string;
    label?:              string;
    target?:             string;
    isExternal?:         boolean;
    displayStyle?:       string;
    theme?:              string;
    headline?:           string;
    headlineSize?:       string;
    sectionAlignment?:   string;
    textAlignment?:      string;
    image?:              Image;
    darkenImage?:        boolean;
    actionAlignment?:    string;
    contentMaxWidth?:    number;
    altText?:            string;
    focalPoint?:         FocalPoint;
    cards?:              Image[];
    cardDisplayStyle?:   string;
    cardsInARow?:        number;
    navigationItems?:    Image[];
    slug?:               string;
}

export interface Image {
    sys: ImageSys;
}

export interface ImageSys {
    type:     PurpleType;
    linkType: LinkTypeEnum;
    id:       string;
}

export enum LinkTypeEnum {
    Asset = "Asset",
    ContentType = "ContentType",
    Entry = "Entry",
    Environment = "Environment",
    Space = "Space",
}

export enum PurpleType {
    Link = "Link",
}

export interface FocalPoint {
}

export interface Metadata {
    tags: any[];
}

export interface ItemSys {
    space:       Image;
    id:          string;
    type:        LinkTypeEnum;
    createdAt:   Date;
    updatedAt:   Date;
    environment: Image;
    revision:    number;
    contentType: Image;
    locale:      Locale;
}