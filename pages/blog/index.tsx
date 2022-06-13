import { Config } from "../../utils/Config";
import PageMeta from "../../components/PageMeta";
import MainLayout from "../../components/MainLayout.jsx";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import BlogList from "../../components/BlogList";

import { getPaginatedPostSummaries, getPageContentBySlug, getAllCategories } from "../../utils/api";
import { blogLanding } from "../../types/blogLanding";
import { GetStaticProps } from "next";

export default function BlogPage (props: blogLanding) {
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
    )    
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
    const blogSummaries = await getPaginatedPostSummaries(1);
    const pageContent = await getPageContentBySlug(
      Config.pageMeta.blogIndex.slug,
      {
        preview: preview,
        environment: "master"
      },
    );
    const allCategories = await getAllCategories();

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
        allCategories: allCategories
      },
    };
  }