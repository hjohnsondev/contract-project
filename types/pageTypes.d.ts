import { Entry } from "contentful"
import { BlogPreviewProps } from "./contentTypes"

export interface category {
    categoryName: string,
}

interface PageFields {
    interanalName: string,
    title: string,
    description: string,
    sections: Entry<T>[],
    slug: string,
}

export interface PageProps extends Entry<PageFields> {}

export interface BlogPageProps {
    allCategories: string[],
    blogSummaries: BlogPreviewProps[],
    currentPage: string,
    pageContent: PageProps[],
    preview: boolean,
    totalPages: number
}

export interface LandingFields {
    landingData: PageProps,
    preview: boolean
}

export interface LandingProps extends LandingFields {}