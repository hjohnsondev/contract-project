import { fetchBlogSections, getAllCategories, getBlogsByCategory, getTotalPostsNumberForCategory } from "../../../../utils/api";

import { GetStaticPaths, GetStaticProps } from "next";

import BlogPageLayout from "../../../../components/Layouts/BlogPageLayout";
import { Config } from "../../../../utils/Config";
import { BlogPageProps } from "types/pageTypes";

export default function BlogPage (props: BlogPageProps) {
    return (<BlogPageLayout {...props}/>) 
}

export const getStaticPaths: GetStaticPaths = async () => {
    const allCategories = await getAllCategories();
  
    return {
        paths: allCategories.map((category) => {
            return { params: { category: category }}
        }),
        fallback: false
    }
}
  
export const getStaticProps: GetStaticProps = async ({ params, preview = false }) => {
    const blogSummaries = await getBlogsByCategory(1, params.category as string);
  
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
        currentPage: 1,
        pageContent: pageContent || null,
        allCategories: allCategories
      },
    };
}