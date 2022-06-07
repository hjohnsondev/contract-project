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

export async function getPreviewLandingBySlug(slug, environment) {
  const contentful = require('contentful')

  const client = contentful.createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      environment: environment,
      accessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN,
      host: 'preview.contentful.com',
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
                ... on Banner {
                  internalName
                  headline
                  backgroundImage {
                    title
                    description
                    url
                    width
                    height
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

export async function getTotalPostsNumberForCategory(category) {
  const query = `
    {
      blogCollection(order: date_DESC) {
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
        }
      }
    }
  `;

  let total = 0;

  const response = await callContentful(query);
  response.data.blogCollection.items.forEach((blog) => {
    if (blog.categoryCollection.items) {
      blog.categoryCollection.items.forEach((item) => {
        if (item.categoryName == category) total++;
      })
    }
  })

  return total;
}

export async function getAllCategories () {
  const query = `
    {
      blogCategoryCollection {
        items {
          categoryName
        }
      }
    }
  `
  const response = await callContentful(query);

  const allCategories = response.data.blogCategoryCollection.items.map((category) => category.categoryName);

  return allCategories;
}

export async function getBlogsByCategory (page, category) {

  const skipMultiplier = page === 1 ? 0 : page - 1;
  const skip =
    skipMultiplier > 0 ? Config.pagination.pageSize * skipMultiplier : 0;

  const variables = { limit: Config.pagination.pageSize, skip, categoryName: category };

  const query = `
    query GetBlogsByCategory($limit: Int!, $skip: Int!, $categoryName: String!) {
      blogCategoryCollection(where: {categoryName: $categoryName}) {
        items {
          categoryName
          linkedFrom {
            entryCollection(limit: $limit, skip: $skip) {
              total
              items {
                ... on Blog {
                  title
                  slug
                  excerpt
                  content {
                    json
                  }
                  date
                  categoryCollection(limit: 4) {
                    items {
                      categoryName
                    }
                  }
                  thumbnail {
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
          }
        }
      }
  }`;

  const response = await callContentful(query, variables);

  const paginatedCategorySummaries = response.data.blogCategoryCollection
    ? response.data.blogCategoryCollection
    : { total: 0, items: [] };

  return paginatedCategorySummaries;
}

export async function getAllBlogPosts () {
  const query = `
    {
      blogCollection {
        total
        items {
          title
          slug
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
          content {
            json
          }
        }
      }
    }
  `

  const response = await callContentful(query);

  const paginatedPostSummaries = response.data.blogCollection
    ? response.data.blogCollection
    : { total: 0, items: [] };

  return paginatedPostSummaries;
}

export async function getBlogBySlug(slug) {
  const variables = { slug };
  const query = `query GetPostBySlug($slug: String!) {
    blogCollection(limit: 1, where: {slug: $slug}) {
      items {
        title
        slug
        content {
          json
        }
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
          fileName
          size
          url
          width
          height
        }
      } 
    }
  }`;

  const response = await callContentful(query, variables);
  const blog = response.data.blogCollection.items
    ? response.data.blogCollection.items
    : [];

  return blog.pop();
}

export async function getRelatedBlogPosts(category) {
  const variables = { limit: 4, categoryName: category };

  const query = `
    query GetBlogsByCategory($limit: Int!, $categoryName: String!) {
      blogCategoryCollection(where: {categoryName: $categoryName}) {
        items {
          categoryName
          linkedFrom {
            entryCollection(limit: $limit) {
              total
              items {
                ... on Blog {
                  title
                  slug
                  date
                  thumbnail {
                    title
                    description
                    url
                    width
                    height
                  }
                }
              }
            }
          }
        }
      }
  }`;
  const response = await callContentful(query, variables);

  const relatedBlogs = response.data.blogCategoryCollection.items[0].linkedFrom.entryCollection.items
    ? response.data.blogCategoryCollection.items[0].linkedFrom.entryCollection.items
    : { total: 0, items: [] };

  return relatedBlogs;
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
