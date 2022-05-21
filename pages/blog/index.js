import { Config } from "../../utils/Config";
import PageMeta from "../../components/PageMeta";
import MainLayout from "../../components/MainLayout";
import Header from "../../components/Header";
import BlogList from "../../components/BlogList";

import { getPaginatedPostSummaries, getPageContentBySlug } from "../../utils/api";

export default function BlogPage (props) {
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
    )    
}

export async function getStaticProps({ preview = false }) {
    const blogSummaries = await getPaginatedPostSummaries(1);
    const pageContent = await getPageContentBySlug(
      Config.pageMeta.blogIndex.slug,
      {
        preview: preview,
      },
    );

    const totalPages = Math.ceil(
      blogSummaries.total / Config.pagination.pageSize,
    );
  
    return {
      props: {
        preview,
        blogSummaries: blogSummaries.items,
        totalPages,
        currentPage: "1",
        pageContent: pageContent || null,
      },
    };
  }