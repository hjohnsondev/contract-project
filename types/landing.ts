export interface landing {
    landingData: {
        name?: string,
        pageTitle: string,
        sections: Record<string, any>,
        slug: string,
    },
    preview: boolean
}