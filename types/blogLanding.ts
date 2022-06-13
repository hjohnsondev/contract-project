import { type } from "os";

export interface blogLanding {
    blogSummaries: Array<any>,
    currentPage: string,
    totalPages: number,
    pageContent: any,
    preview: boolean,
    allCategories: string[]
}