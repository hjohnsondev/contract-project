
const SITE_URL = "http://localhost:3000";

export const Config = {
    site: {
      owner: "Xtivia Inc.",
      title: "Contract Project",
      domain: "http://localhost:3000",
      email: "example@example.com",
      feedDescription: "Example Feed for example.com",
    },
    pageMeta: {
      home: {
        url: SITE_URL,
        slug: "/",
      },
      blogIndex: {
        url: `${SITE_URL}/blog`,
        slug: "/blog",
      },
      blogIndexPage: {
        slug: "/blog/page/[page]",
      },
      notFound: {
        url: SITE_URL,
        slug: "/404",
      },
    },
    pagination: {
      pageSize: 10,
      recentPostsSize: 3,
    },
    menuLinks: [
      {
        displayName: "Home",
        path: "/",
      },
      {
        displayName: "Blog",
        path: "/blog",
      },
    ],
};