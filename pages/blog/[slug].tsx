import { Config } from "../../utils/Config";
import { getAllBlogPosts, getBlogBySlug, getPageContentBySlug, getAllCategories, getRelatedBlogPosts } from "../../utils/api";

import MainLayout from "../../components/MainLayout";
import PageMeta from "../../components/PageMeta";
import Header from "../../components/Header";
import SlugPage from "../../components/SlugPage";
import PreviewBanner from "../../components/PreviewBanner";
import Banner from "../../components/Banner";
import { GetStaticPaths, GetStaticProps } from "next";

export default function BlogPage (props) {
    const {
        blogContent,
        pageContent,
        allCategories,
        relatedPosts
    } = props;

    const headerData = pageContent.sectionsCollection.items.find((section) => section.internalName == "Head");
    const bannerData = pageContent.sectionsCollection.items.find((section) => section.internalName == "Blog Banner");

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
            {pageContent.header !== null && (
                <Header headerData={headerData} blogHeader={true}/>
            )}

            {bannerData && <Banner bannerData={bannerData}/>}

            <SlugPage
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
    const pageContent = await getPageContentBySlug(
      Config.pageMeta.blogIndex.slug,
      {
        preview: preview,
        environment: previewData.environment
      },
    );
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