 import { Config } from './Config';
 const contentful = require('contentful')

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

export async function getLandingBySlug(slug: string) {
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

export async function getPreviewLandingBySlug(slug: string, environment: string) {
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

export async function fetchBlogSections() {
  const options = {
    content_type: "blogPageContent",
    "fields.slug": "blog",
    include: 10
  }
  return fetchFromContentful(options)
}

async function fetchFromContentful(options) {
  return await fetchEntries(options);
}

async function fetchEntries(options) {
  if (process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN) {
    const client = contentful.createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      environment: 'master', // defaults to 'master' if not set
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
    })
    const entries = await client.getEntries(options)
    if (entries.items) return entries.items
    console.error(`Error getting Entries for ${options.contentType}.`)
  }
  console.error(`Access Token is undefined`);
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

export async function getTotalPostsNumberForCategory(category: string) {
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

export async function getBlogsByCategory (page, category: string) {

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

export async function getBlogBySlug(slug: string, options = defaultOptions) {
  const variables = { slug, preview: options.preview };
  const query = `query GetPostBySlug($slug: String!, $preview: Boolean!) {
    blogCollection(limit: 1, where: {slug: $slug}, preview: $preview) {
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

  const response = await callContentful(query, variables, options);

  const blog = response.data.blogCollection.items
    ? response.data.blogCollection.items
    : [];

  return blog.pop();
}

export async function getRelatedBlogPosts(category: string) {
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
    environment: "master"
};

export async function callContentful(query: string, variables = {}, options = defaultOptions) {
    const fetchUrl = 
      options.environment == "master" ? 
      `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}` :
      `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${options.environment}`;

    const accessToken = options.preview
      ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
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
