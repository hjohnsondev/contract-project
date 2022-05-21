 import { Config } from './Config';
 
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

export async function getPageContentBySlug(slug, options = defaultOptions) {
    const variables = { slug, preview: options.preview };
    const query = `
    query GetPageContentBySlug($slug: String!, $preview: Boolean!) {
        pageContentCollection(limit: 1, where: {slug: $slug}, preview: $preview) {
          items {
            sys {
              id
            }
            sectionsCollection {
              items {
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
                  actionsCollection(limit: 10) {
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
                    navigationItemsCollection(limit: 10) {
                      items {
                        label
                        slug
                      }
                    }
                  }
                  logoCardsCollection(limit: 10) {
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
    }`;

    const response = await callContentful(query, variables, options);

    const pageContent = response.data.pageContentCollection.items
      ? response.data.pageContentCollection.items
      : [];

    return pageContent.pop();
}

export async function getPaginatedPostSummaries(page) {
    /**
     * Calculate the skip parameter for the query based on the incoming page number.
     * For example, if page === 2, and your page length === 3,
     * the skip parameter would be calculated as 3 (the length of a page)
     * therefore skipping the results of page 1.
     */

    const skipMultiplier = page === 1 ? 0 : page - 1;
    const skip =
      skipMultiplier > 0 ? Config.pagination.pageSize * skipMultiplier : 0;

    const variables = { limit: Config.pagination.pageSize, skip };

    const query = `
        query GetPaginatedPostSummaries($limit: Int!, $skip: Int!) {
            blogCollection(limit: $limit, skip: $skip, order: date_DESC) {
                total
                items {
                    title
                    slug
                    excerpt
                    date
                    categoryCollection {
                        items {
                            categoryName
                        }
                    }
                    thumbnail {
                        title
                        description
                        contentType
                        url
                        width
                        height
                    }
                }
            }
        }`;

    const response = await callContentful(query, variables);

    const paginatedPostSummaries = response.data.blogCollection
      ? response.data.blogCollection
      : { total: 0, items: [] };

    return paginatedPostSummaries;
}

export async function getTotalPostsNumber() {
  const query = `
    {
      blogCollection {
        total
      }
    }
  `;

  const response = await callContentful(query);
  const totalPosts = response.data.blogCollection.total
    ? response.data.blogCollection.total
    : 0;

  return totalPosts;
}

const defaultOptions = {
    preview: false,
};

export async function callContentful(query, variables = {}, options = defaultOptions) {
    const fetchUrl = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`;

    const accessToken = options.preview
      ? process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN
      : process.env.CONTENTFUL_ACCESS_TOKEN;

    const fetchOptions = {
      method: "POST",
      headers: {
        Authorization: "Bearer " + accessToken,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query, variables }),
    };

    try {
      const data = await fetch(fetchUrl, fetchOptions).then((response) =>
        response.json(),
      );
      return data;
    } catch (error) {
      throw new Error("Could not fetch data from Contentful!");
    }
}
