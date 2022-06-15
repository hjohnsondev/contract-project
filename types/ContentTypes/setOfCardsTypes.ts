import { imageWithFocalPoint, materialIcon } from "./headerTypes";

export interface card {
    iconSize: string,
    image: { fields: imageWithFocalPoint },
    materialDesignIcon: { fields: materialIcon },
    imagePosition: string,
    internalName: string,
    subText: string,
    title: string,
    titleSize: string,
}

export interface setOfCardTypes {
    cardData: {
        cardDisplayStyle: string,
        cards: { fields: card }[],
        cardsInARow: number,
        internalName: string,
        maxWidth: number,
        title: string,
        titleSize: string
    }
}

export interface cardTypes {
    card: { fields: card},
    key: number,
    cardsInARow: number
}