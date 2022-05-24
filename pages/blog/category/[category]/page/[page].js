import { useRouter } from "next/router";

import { getAllCategories, getBlogsByCategory, getPageContentBySlug, getTotalPostsNumberForCategory } from "../../../../../utils/api";

import { Config } from "../../../../../utils/Config";
import PageMeta from "../../../../../components/PageMeta";
import MainLayout from "../../../../../components/MainLayout";
import Header from "../../../../../components/Header";
import BlogList from "../../../../../components/BlogList";

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
                allCategories={allCategories}
            />
        </MainLayout>
    )    
}

export async function getStaticPaths() {
    const allCategories = await getAllCategories();

    const allPaths = []
    for (let category of allCategories) {
        const pages = await getTotalPostsNumberForCategory(category)
        const totalPages = Math.ceil(pages / Config.pagination.pageSize);
        for (let page = 2; page <= totalPages; page++) {
            allPaths.push({ params: {
                category: category.toString(),
                page: page.toString()
            }});
        }
    }

    return {
        paths: allPaths,
        fallback: false,
    };
  }
  
export async function getStaticProps({ params, preview = false }) {
    const blogSummaries = await getBlogsByCategory(params.page, params.category);
    const totalBlogsByCategory = await getTotalPostsNumberForCategory(params.category);
  
    const totalPages = Math.ceil(
        totalBlogsByCategory / Config.pagination.pageSize,
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
        blogSummaries: blogSummaries.paginatedDataForCategory,
        totalPages,
        currentPage: params.page,
        pageContent: pageContent || null,
        allCategories: allCategories
        },
    };
}