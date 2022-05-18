export async function getAllCardsForHeader () {
    const query = `
        {
            cardCollection {
                items {
                        materialDesignIcon {
                            iconName
                        }
                        internalName
                        title
                        titleSize
                        subText
                        iconSize
                        imagePosition
                }
            }
        }
    `
    const response = await fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
        {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`
            },
            body: JSON.stringify({
                query
            })
        }
    )
    const { data } = await response.json();
    return data.cardCollection.items.filter((card) => card.internalName === 'header');
}

export async function getAllHeaderData () {
    const query = `
        {
            headerCollection(limit: 10) {
                items {
                    internalName
                    tagline
                    maxWidth
                    logo {
                        image {
                            url
                        }
                        title
                        altText
                        focalPoint
                    }
                    actionsCollection {
                        items {
                            materialDesignIcon {
                            iconName
                            }
                            label
                            isExternal
                            displayStyle
                        } 
                    }
                    navigationMenu {
                        internalName
                        icon
                        navigationItemsCollection {
                            items {
                                label
                                slug
                            } 
                        }
                    } 
                    logoCardsCollection {
                        items {
                            materialDesignIcon {
                                iconName
                            }
                            internalName
                            title
                            titleSize
                            subText
                            iconSize
                            imagePosition
                        }
                    }
                }
            }
        }
    `
    const response = await fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
        {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`
            },
            body: JSON.stringify({
                query
            })
        }
    )
    const { data } = await response.json();
    return {...data};
}

export async function getHeroImageData () {
    const query = `
        {
            heroImageCollection {
                items {
                    internalName
                    headline
                    headlineSize
                    sectionAlignment
                    textAlignment
                    darkenImage
                    actionAlignment
                    contentMaxWidth
                    maxWidth
                    subText {
                        json
                    }
                    image {
                        image {
                            url
                        }
                        title
                        altText
                    }
                    actionsCollection {
                        items {
                            internalName
                            label
                            target
                            isExternal
                            displayStyle
                            theme
                        }
                    }
                }
            }
        }
    `
    const response = await fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
        {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`
            },
            body: JSON.stringify({
                query
            })
        }
    )
    const { data } = await response.json();
    return {...data};
} 

export async function getAllCardData () {
    const query = `
        {
            setOfCardCollection(limit: 10) {
                items {
                    internalName
                    title
                    titleSize
                    cardDisplayStyle
                    cardsInARow
                    maxWidth
                    cardsCollection {
                        items {
                            internalName
                            title
                            titleSize
                            subText
                            iconSize
                            imagePosition
                            materialDesignIcon {
                                iconName
                            }
                            image {
                                image {
                                    url
                                }
                            altText
                            }
                        } 
                    }
                }
            }
        }
    `
    const response = await fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
        {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`
            },
            body: JSON.stringify({
                query
            })
        }
    )
    const { data } = await response.json();
    return {...data};
} 

export async function getCardSectionData () {
    const query = `
        {
            cardCollection {
                items {
                    internalName
                    title
                    titleSize
                    subText
                    iconSize
                    iconColor
                    imagePosition
                    image {
                        image {
                            title
                            description
                            contentType
                            fileName
                            size
                            url
                            width
                            height
                        }
                        title
                        altText
                        caption
                        focalPoint
                    }
                    customIcon {
                        title
                        description
                        contentType
                        fileName
                        size
                        url
                        width
                        height
                    }
                }
            }
        }
    `
    const response = await fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
        {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`
            },
            body: JSON.stringify({
                query
            })
        }
    )
    const { data } = await response.json();
    return {...data};
} 

export async function getAllTestimonialData () {
    const query = `
    {
        setOfTestimonialsCollection {
          items {
            internalName
            title
            titleSize
            subText
            maxWidth
            testimonialsCollection (limit: 10) {
              items {
                image {
                  url
                }
                internalName
                name
                location
                product
                testimonial {
                  json
                }
              }
            }
          }
        }
    }
`
    const response = await fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
        {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`
            },
            body: JSON.stringify({
                query
            })
        }
    )
    const { data } = await response.json();
    return {...data};
} 
