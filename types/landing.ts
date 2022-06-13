export interface landing {
    landingData: landingData,
    preview: preview
}

interface landingData {
    metadata: metadata,
    sys: any,
    fields: any
}

interface metadata {
    tags: Array<any>
}

export type preview = boolean;