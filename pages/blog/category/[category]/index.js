import { getAllCategories, getBlogsByCategory, getPageContentBySlug, getTotalPostsNumberForCategory } from "../../../../utils/api";

import { Config } from "../../../../utils/Config";
import PageMeta from "../../../../components/PageMeta";
import MainLayout from "../../../../components/MainLayout";
import Header from "../../../../components/Header";
import BlogList from "../../../../components/BlogList";
import { useRouter } from "next/router";
import Banner from "../../../../components/Banner";

export default function BlogPage (props) {

    const {
        blogSummaries,
        currentPage,
        totalPages,
        pageContent,
        preview,
        allCategories
    } = props;

    const headerData = pageContent.sectionsCollection.items.find((section) => section.internalName == "Header");
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

export async function getStaticPaths() {
    const allCategories = await getAllCategories();
  
    return {
        paths: allCategories.map((category) => {
            return { params: { category: category }}
        }),
        fallback: false
    }
}
  
export async function getStaticProps({ params, preview = false }) {
    const blogSummaries = await getBlogsByCategory(1, params.category);
  
    const totalPages = Math.ceil(
        blogSummaries.items[0].linkedFrom.entryCollection.total / Config.pagination.pageSize,
    );
    const pageContent = await getPageContentBySlug(
      Config.pageMeta.blogIndex.slug,
      {
        preview: preview,
      },
    );
    const allCategories = await getAllCategories();
  
    return {
      props: {
        preview,
        blogSummaries: blogSummaries.items[0].linkedFrom.entryCollection.items,
        totalPages,
        currentPage: 1,
        pageContent: pageContent || null,
        allCategories: allCategories
      },
    };
}