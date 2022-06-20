import { Config } from "../../utils/Config";
import { getAllBlogPosts, getBlogBySlug, getAllCategories, getRelatedBlogPosts, fetchBlogSections } from "../../utils/api";

import MainLayout from "../../components/Layouts/MainLayout";
import PageMeta from "../../components/Common/PageMeta";
import Header from "../../components/ContentTypes/Header";
import Blog from "../../components/ContentTypes/Blog";
import PreviewBanner from "../../components/Common/PreviewBanner";
import Banner from "../../components/ContentTypes/Banner";
import { GetStaticPaths, GetStaticProps } from "next";
import { SingleBlogPageProps } from "types/common";

export default function BlogPage (props: SingleBlogPageProps) {
    const {
        blogContent,
        pageContent,
        allCategories,
        relatedPosts
    } = props;

    // console.log(pageContent)

    const pageTitle = pageContent ? pageContent.title : "Blog";
    const pageDescription = pageContent
    ? pageContent.description
    : "Blogs | Xtivia Inc. Blog Project";

    return (
        <MainLayout>
            <PageMeta
                title={pageTitle}
                description={pageDescription}
                url={Config.pageMeta.blogIndex.url}
            />
            {props.preview && <PreviewBanner/>}
            
            {pageContent[0].fields.sections[0].fields && <Header {...pageContent[0].fields.sections[0]}/>}
            {pageContent[0].fields.sections[1].fields && <Banner {...pageContent[0].fields.sections[1]}/>}

            <Blog
                blog={blogContent}
                allCategories={allCategories}
                relatedPosts={relatedPosts}
            />
        </MainLayout>
    )  
}

export const getStaticPaths: GetStaticPaths = async () => {
    const allBlogs = await getAllBlogPosts();

    return {
        paths: allBlogs.items.map((blog) => {
            return { params: { slug: blog.slug }}
        }),
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params, preview = false, previewData = { environment: "master" }}: any) => {

    const blogContent = await getBlogBySlug(params.slug, { preview: preview, environment: previewData.environment });
    const pageContent = await fetchBlogSections();
    const allCategories = await getAllCategories();
    const relatedPosts = await getRelatedBlogPosts(blogContent.categoryCollection.items[0].categoryName);

    return {
      props: {
        preview: preview || false,
        blogContent: blogContent,
        pageContent: pageContent || null,
        allCategories: allCategories,
        relatedPosts: relatedPosts || null
      },
    };
}