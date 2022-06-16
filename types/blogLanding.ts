import { Entry } from "contentful"

export interface category {
    categoryName: string,
}

export interface blogPreview {
    categoryCollection: { items: category[] },
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

interface pageStructure {
    interanalName: string,
    title: string,
    description: string,
    sections: Record<string, any>,
    slug: string,
}

export interface blogListTypes {
    allCategories: string[],
    blogSummaries: blogPreview[],
    currentPage: string,
    pageContent: Entry<pageStructure>[],
    preview: boolean,
    totalPages: number
}