import Link from "next/link"
import imageLoader from "../imageLoader"
import Image from "next/image"
import { useRouter } from "next/router";

export default function BlogComponent({blog}) {

    return (<div className="flex flex-wrap pr-10">
    <article className="flex flex-col space-y-5">
        <Image src={blog.thumbnail.url} width={blog.thumbnail.width} height={blog.thumbnail.height} loader={imageLoader}/>
        <Link href={`/blog/${blog.slug}`}>
            <a>
                <h2 className="text-3xl"><strong>{blog.title}</strong></h2>
            </a>
        </Link>
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
        <p className="text-gray-500 font-sans">{blog.excerpt}</p>
        <Link href={`/blog/${blog.slug}`}>
            <a>
                <button className={`transition ease-in-out duration-700 px-2 py-2 mr-3 mb-3 w-[18%] font-semibold rounded border-solid border border-sky-500 hover:bg-sky-500 hover:text-white text-sky-500`}>Read More</button>
            </a>
        </Link>
        </article>
</div>)
}