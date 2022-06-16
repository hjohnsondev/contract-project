import Link from "next/link"
import imageLoader from "../../imageLoader"
import Image from "next/image"
import BlogDetails from "./BlogDetails"
import { blogPreviewType } from "../../types/Common/blogListTypes";

export default function BlogComponent({ blog }: blogPreviewType) {

    const { thumbnail, title, categoryCollection, date, excerpt, slug } = blog;

    return (<div className="flex flex-wrap pr-10">
        <article className="flex flex-col space-y-5">
            <Image src={thumbnail.url} width={thumbnail.width} height={thumbnail.height} loader={imageLoader}/>
            <Link href={`/blog/${slug}`}>
                <a>
                    <h2 className="m-0">{title}</h2>
                </a>
            </Link>
            <BlogDetails date={date} categoryCollection={categoryCollection}/>
            <hr/>
            <p className="text-gray-500 font-sans">{excerpt}</p>
            <Link href={`/blog/${slug}`}>
                <a>
                    <button className='btn blog-button'>Read More</button>
                </a>
            </Link>
        </article>
    </div>)
}