import { Config } from "../../utils/Config";

import { getPaginatedPostSummaries, fetchBlogSections, getAllCategories } from "../../utils/api";
import { blogLanding } from "../../types/blogLanding";
import { GetStaticProps } from "next";
import BlogPageLayout from "../../components/BlogPageLayout";

export default function BlogPage (props: blogLanding) {
    return (<BlogPageLayout props={props}/>) 
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
    const blogSummaries = await getPaginatedPostSummaries(1);
    const pageContent = await fetchBlogSections();
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