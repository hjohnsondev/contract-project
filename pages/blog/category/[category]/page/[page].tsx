import { fetchBlogSections, getAllCategories, getBlogsByCategory, getTotalPostsNumberForCategory } from "../../../../../utils/api";

import { Config } from "../../../../../utils/Config";

import { GetStaticPaths, GetStaticProps } from "next";
import BlogPageLayout from "../../../../../components/Layouts/BlogPageLayout";
import { BlogPageProps } from "types/pageTypes";

export default function BlogPage (props: BlogPageProps) {
    return (<BlogPageLayout {...props}/>)  
}

export const getStaticPaths: GetStaticPaths = async () => {
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
  
export const getStaticProps: GetStaticProps = async ({ params, preview = false }) => {
    const blogSummaries = await getBlogsByCategory(params.page, params.category as string);
  
    const totalPages = Math.ceil(
        blogSummaries.items[0].linkedFrom.entryCollection.total / Config.pagination.pageSize,
    );

    const pageContent = await fetchBlogSections();

    const allCategories = await getAllCategories();

    return {
        props: {
        preview,
        blogSummaries: blogSummaries.items[0].linkedFrom.entryCollection.items,
        totalPages,
        currentPage: params.page,
        pageContent: pageContent || null,
        allCategories: allCategories
        },
    };
}