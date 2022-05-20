
const SITE_URL = "https://vercel.com/hjohnsondev/contract-project/GfhRvUKCw2gp65w393gjjTyepHRq";

export const Config = {
    site: {
      owner: "Xtivia Inc.",
      title: "Contract Project",
      domain: "vercel.com/hjohnsondev/contract-project/GfhRvUKCw2gp65w393gjjTyepHRq",
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