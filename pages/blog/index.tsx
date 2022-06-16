import { Config } from "../../utils/Config";

import { getPaginatedPostSummaries, fetchBlogSections, getAllCategories } from "../../utils/api";
import { GetStaticProps } from "next";
import BlogPageLayout from "../../components/Layouts/BlogPageLayout";

export default function BlogPage (props) {
    return (<BlogPageLayout props={props}/>) 
}

export const getStaticProps: GetStaticProps = async ({ preview = false }: { preview: boolean }) => {
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