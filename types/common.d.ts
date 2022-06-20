import { ReactNode } from "react"
import { BlogFields, BlogProps, CardProps, NavigationItemProps, RelatedPostFields } from "./contentTypes"

export interface CardComponentProps {
    card: CardProps,
    key: number,
    cardsInARow: number
}

export interface MainLayoutProps {
    children: ReactNode,
    preview?: boolean
}
/*
interface SingleBlogFields {
    internalName: string,
    slug: string,
    sections: 
}
*/

export interface SingleBlogPageProps {
    blogContent: BlogFields,
    allCategories: string[],
    relatedPosts: RelatedPostFields[],
    pageContent: Entry<T>,
    preview: boolean
}