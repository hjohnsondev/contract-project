import CategoriesMenu from "../Common/CategoriesMenu"
import Image from "next/image"
import imageLoader from "../../imageLoader"

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import RelatedBlog from "../Common/RelatedBlog";
import BlogDetails from "../Common/BlogDetails";
import RichTextComponent from "../Common/RichTextComponent";

export default function Blog({ blog: { thumbnail, title, categoryCollection, date, content, slug}, allCategories, relatedPosts }) {

    return (
        <div className="content-wrap">
            <div className="flex flex-wrap my-10">
                <article className="basis-3/4 flex flex-col space-y-5 pr-10">
                    <Image src={thumbnail.url} width={thumbnail.width} height={thumbnail.height} loader={imageLoader}/>
                    <h2>{title}</h2>
                    <BlogDetails date={date} categoryCollection={categoryCollection}/>
                    <hr/>
                    <RichTextComponent entry={content.json} className={`text-gray-500`}/>
                    <div className="flex justify-between text-lg">
                       <p className="font-semibold">Share this post:</p> 
                       <div className="flex items-center">
                            <a href=""><div className={`social-icon mdi mdi-facebook`}></div></a>
                            <a href=""><div className={`social-icon mdi mdi-twitter`}></div></a>
                            <a href=""><div className={`social-icon mdi mdi-google-plus`}></div></a>
                            <a href=""><div className={`social-icon mdi mdi-pinterest`}></div></a>
                       </div>
                    </div>
                    <hr/>
                    <h2>Related Posts</h2>
                    <div className="flex flex-wrap">
                        {relatedPosts && relatedPosts.map((post, index) => {
                            if (post.slug != slug) {
                                return (<RelatedBlog date={date} post={post} key={index}/>)
                            }
                        })}
                    </div>
                </article>
                <div className="basis-1/4">
                    <CategoriesMenu categories={allCategories}/>
                </div> 
            </div>
        </div>
    )
}