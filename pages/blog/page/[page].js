import { Config } from "../../../utils/Config";
import PageMeta from "../../../components/PageMeta";
import BlogList from "../../../components/BlogList";
import MainLayout from "../../../components/MainLayout";
import { getTotalPostsNumber, getPaginatedPostSummaries, getPageContentBySlug, getAllCategories } from "../../../utils/api";
import Banner from "../../../components/Banner";

import Header from "../../../components/Header";

export default function BlogIndexPage(props) {
    const {
        blogSummaries,
        currentPage,
        totalPages,
        pageContent,
        preview,
        allCategories
    } = props;

    const headerData = pageContent.sectionsCollection.items.find((section) => section.internalName == "Head");
    const bannerData = pageContent.sectionsCollection.items.find((section) => section.internalName == "Blog Banner");

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

        {bannerData && <Banner bannerData={bannerData}/>}

        <BlogList
            blogs={blogSummaries}
            totalPages={totalPages}
            currentPage={currentPage}
            allCategories={allCategories}
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
      environment: "master"
    },
  );

  const allCategories = await getAllCategories();

  return {
    props: {
      preview,
      blogSummaries: blogSummaries.items,
      totalPages,
      currentPage: params.page,
      pageContent: pageContent || null,
      allCategories: allCategories
    },
  };
}