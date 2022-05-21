import { Config } from "../../../utils/Config";
import PageMeta from "../../../components/PageMeta";
import BlogList from "../../../components/BlogList";
import MainLayout from "../../../components/MainLayout";
import { getTotalPostsNumber, getPaginatedPostSummaries, getPageContentBySlug } from "../../../utils/api";

import Header from "../../../components/Header";

export default function BlogIndexPage(props) {
    const {
        blogSummaries,
        currentPage,
        totalPages,
        pageContent,
        preview,
    } = props;

    const headerData = pageContent.sectionsCollection.items.find((section) => section.internalName == "Header");

    const pageTitle = pageContent ? pageContent.title : "Blog";
    const pageDescription = pageContent
    ? pageContent.description
    : "Blogs | Xtivia Inc. Blog Project";

  return (
    <MainLayout preview={preview}>
        <PageMeta
            title={pageTitle}
            description={pageDescription}
            url={Config.pageMeta.blogIndex.url}
        />
        {pageContent.header !== null && (
            <Header headerData={headerData} blogHeader={true}/>
        )}

        <BlogList
            blogs={blogSummaries}
            totalPages={totalPages}
            currentPage={currentPage}
        />
    </MainLayout>
  );
}

export async function getStaticPaths() {
  const totalPosts = await getTotalPostsNumber();
  const totalPages = Math.ceil(totalPosts / Config.pagination.pageSize);

  const paths = [];

  /*
   * Start from page 2, so we don't replicate /blog
   * which is page 1
   */
  for (let page = 2; page <= totalPages; page++) {
    paths.push({ params: { page: page.toString() } });
  }

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params, preview = false }) {
  const blogSummaries = await getPaginatedPostSummaries( params.page );

  const totalPages = Math.ceil(
    blogSummaries.total / Config.pagination.pageSize,
  );
  const pageContent = await getPageContentBySlug(
    Config.pageMeta.blogIndex.slug,
    {
      preview: preview,
    },
  );

  return {
    props: {
      preview,
      blogSummaries: blogSummaries.items,
      totalPages,
      currentPage: params.page,
      pageContent: pageContent || null,
    },
  };
}