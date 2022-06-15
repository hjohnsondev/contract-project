import MainLayout from "./MainLayout";
import PageMeta from "./PageMeta";
import BlogList from "./BlogList";
import Header from "./Header";
import Banner from "./Banner";

import { Config } from "../utils/Config";

export default function BlogPageLayout ({ props }) {
    const {
        blogSummaries,
        currentPage,
        totalPages,
        pageContent,
        preview,
        allCategories
    } = props;
    
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

            {pageContent[0].fields.sections[0].fields && <Header headerData={pageContent[0].fields.sections[0].fields}/>}
            {pageContent[0].fields.sections[1].fields && <Banner bannerData={pageContent[0].fields.sections[1].fields}/>}

            <BlogList
                blogs={blogSummaries}
                totalPages={totalPages}
                currentPage={currentPage}
                allCategories={allCategories}
            />
        </MainLayout>
    )   
}