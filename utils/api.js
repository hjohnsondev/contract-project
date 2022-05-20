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

export async function getBlogPageLanding () {
    const query = `
    {
        pageLanding(id: "4GxddBH3iN4GV7sqCDNjj0") {
          sectionsCollection (limit: 5) {
            items {
              ... on AllBlogs {
                internalName
                blogsCollection (limit:10 skip:0) {
                  total
                  items {
                    title
                    slug
                    excerpt
                    date
                    thumbnail {
                        title
                        description
                        contentType
                        url
                        width
                        height
                    }
                    category {
                      categoryName
                    }
                    content {
                      json
                    }
                  }
                }
              }
              ... on AllCategories {
                categoriesCollection (limit:10) {
                  items {
                    categoryName
                  }
                }
              }
              ... on Footer {
                internalName
              }
              ... on Header {
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
                actionsCollection (limit:10) {
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
                  navigationItemsCollection (limit:10) {
                    items {
                      label
                      slug
                    }
                  }
                }
                logoCardsCollection (limit:10) {
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

export async function getHomeLandingPageData () {
    const contentful = require('contentful')

    const client = contentful.createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        environment: 'master', // defaults to 'master' if not set
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
    })

    const response = await client.getEntries();

    const data = response.items.find((entry) => entry.fields.slug == "home")

    return data;
}

export async function getAllLandingTypes () {
    const contentful = require('contentful')

    const client = contentful.createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        environment: 'master', // defaults to 'master' if not set
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
    })

    const response = await client.getEntries();

    const data = response.items.filter((entry) => entry.sys.contentType.sys.id == "pageLanding")

    return data;
}

export async function getLandingBySlug(slug) {
    const contentful = require('contentful')

    const client = contentful.createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        environment: 'master', // defaults to 'master' if not set
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
    })

    const response = await client.getEntries();

    const data = response.items.find((entry) => entry.fields.slug == slug)

    return data;
}