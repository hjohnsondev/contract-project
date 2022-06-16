import { blogPreview, category } from "../blogLanding";

export interface blogListTypes {
    blogs: blogPreview[],
    totalPages: number | string,
    currentPage: string,
    allCategories: string[]
}

export interface blogPreviewType {
    blog: {
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
}

export interface blogDetails {
    date: string,
    categoryCollection: { items: category[] }
}