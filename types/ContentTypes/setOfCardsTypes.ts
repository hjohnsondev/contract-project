import { imageWithFocalPoint, materialIcon } from "./headerTypes";
import { Entry } from "contentful";

export interface card {
    iconSize: string,
    image: Entry<imageWithFocalPoint>,
    materialDesignIcon: Entry<materialIcon>,
    imagePosition: string,
    internalName: string,
    subText: string,
    title: string,
    titleSize: string,
}

export interface setOfCardFields {
    cardDisplayStyle: string,
    cards: Entry<card>[],
    cardsInARow: number,
    internalName: string,
    maxWidth: number,
    title: string,
    titleSize: string
}

export interface setOfCardTypes extends Entry<setOfCardFields> { key: number }

export interface cardTypes {
    card: Entry<card>,
    key: number,
    cardsInARow: number
}