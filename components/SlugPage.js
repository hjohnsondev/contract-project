import CategoriesMenu from "./CategoriesMenu"
import Image from "next/image"
import imageLoader from "../imageLoader"
import Link from "next/link";

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export default function SlugPage({ blog, allCategories, relatedPosts }) {

    return (
        <div className="md:container md:mx-auto px-48 h-full">
            <div className="flex flex-wrap my-10">
                <article className="basis-3/4 flex flex-col space-y-5 pr-10">
                    <Image src={blog.thumbnail.url} width={blog.thumbnail.width} height={blog.thumbnail.height} loader={imageLoader}/>
                    <h2 className="text-3xl"><strong>{blog.title}</strong></h2>
                    <div className="flex space-x-5">
                        <span className="flex pr-5 border-r">
                            <p className="mr-1"><strong>Date:</strong></p>
                            <p className="text-gray-500">{blog.date.slice(0, 10)}</p>
                        </span>
                        <span className="flex">
                            <p className="mr-1"><strong>{blog.categoryCollection.items.length > 1 ? "Categories:" : "Category:"}</strong></p>
                            {blog.categoryCollection.items.map((category, index) => {
                                return <p key={index} className={`text-gray-500 mr-1`}>{blog.categoryCollection.items.length > 1 && index < blog.categoryCollection.items.length - 1 ? category.categoryName + "," : category.categoryName}</p>
                            })}
                        </span>
                    </div>
                    <hr/>
                    <div className="flex flex-col space-y-5 text-gray-500 font-sans">
                        {documentToReactComponents(blog.content.json)}
                    </div>
                    <div className="flex justify-between text-lg">
                       <p><strong>Share this post:</strong></p> 
                       <div className="flex items-center">
                            <a href=""><div className={`ml-3 text-2xl text-gray-500 hover:text-sky-500 mdi mdi-facebook`}></div></a>
                            <a href=""><div className={`ml-3 text-2xl text-gray-500 hover:text-sky-500 mdi mdi-twitter`}></div></a>
                            <a href=""><div className={`ml-3 text-2xl text-gray-500 hover:text-sky-500 mdi mdi-google-plus`}></div></a>
                            <a href=""><div className={`ml-3 text-2xl text-gray-500 hover:text-sky-500 mdi mdi-pinterest`}></div></a>
                       </div>
                    </div>
                    <hr/>
                    <h2 className="text-3xl"><strong>Related Posts</strong></h2>
                    <div className="flex flex-wrap">
                        {relatedPosts && relatedPosts.map((post, index) => {
                            if (post.slug != blog.slug) {
                                return (<div key={index} className="flex max-w-xs space-x-5 items-center mr-16 mb-5">
                                    <div className="bg-cover bg-center w-16 h-14 rounded-full" style={{"background-image": `url(${post.thumbnail.url})`}}>
                                    </div>
                                    <div>
                                        <div className="flex items-center space-x-1">
                                            <span className="text-sky-500 mdi mdi-arrow-right"></span>
                                            <p className="text-gray-500">{blog.date.slice(0, 10)}</p>
                                        </div>
                                        <Link href={`${post.slug}`}>
                                            <a>
                                                <p>{post.title.length > 35 ? post.title.slice(0, 35) + ". . ." : post.title}</p>
                                            </a>
                                        </Link>
                                        
                                    </div>
                                </div>)
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