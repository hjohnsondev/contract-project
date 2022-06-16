import { Document } from '@contentful/rich-text-types';

interface category {
    categoryName: string,
}

export interface blogTypes {
    blog: blog,
    allCategories: string[],
    relatedPosts: relatedPost[]
}

interface blog {
    categoryCollection: { items: category[] },
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

export interface relatedPost {
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