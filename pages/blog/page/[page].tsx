import { Config } from "../../../utils/Config";
import { getTotalPostsNumber, getPaginatedPostSummaries, getAllCategories, fetchBlogSections } from "../../../utils/api";
import { GetStaticPaths } from "next";

import BlogPageLayout from "../../../components/Layouts/BlogPageLayout";

export default function BlogIndexPage(props) {
  return (<BlogPageLayout {...props}/>) 
}

export const getStaticPaths: GetStaticPaths = async () => {
  const totalPosts = await getTotalPostsNumber();
  const totalPages = Math.ceil(totalPosts / Config.pagination.pageSize);

  const paths = [];
  
  for (let page = 2; page <= totalPages; page++) {
    paths.push({ params: { page: page.toString() } });
  }

  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps = async ({ params, preview = false }) => {
  const blogSummaries = await getPaginatedPostSummaries( params.page );

  const totalPages = Math.ceil(
    blogSummaries.total / Config.pagination.pageSize,
  );
  const pageContent = await fetchBlogSections();

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