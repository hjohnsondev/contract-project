import MainLayout from "./MainLayout";
import PageMeta from "../Common/PageMeta";
import BlogList from "../Common/BlogList";
import Header from "../ContentTypes/Header";
import Banner from "../ContentTypes/Banner";

import { Config } from "../../utils/Config";
import { BlogPageProps } from "../../types/pageTypes";

export default function BlogPageLayout (props: BlogPageProps) {

    const {
        blogSummaries,
        currentPage,
        totalPages,
        pageContent,
        preview,
        allCategories
    } = props;
    
    const pageTitle = pageContent[0].fields.title ? pageContent[0].fields.title : "Blog";
    const pageDescription = pageContent[0].fields.description
    ? pageContent[0].fields.description
    : "Blogs | Xtivia Inc. Blog Project";

    return (
        <MainLayout preview={preview}>
            <PageMeta
                title={pageTitle}
                description={pageDescription}
                url={Config.pageMeta.blogIndex.url}
            />

            {pageContent[0].fields.sections[0].fields && <Header {...pageContent[0].fields.sections[0]}/>}
            {pageContent[0].fields.sections[1].fields && <Banner {...pageContent[0].fields.sections[1]}/>}

            <BlogList
                blogs={blogSummaries}
                totalPages={totalPages}
                currentPage={currentPage}
                allCategories={allCategories}
            />
        </MainLayout>
    )   
}