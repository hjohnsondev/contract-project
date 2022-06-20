import Link from "next/link"
import BlogDetails from "./BlogDetails"
import { BlogPreviewProps } from "../../types/contentTypes";
import ContentfulImage from "../ContentfulImage"

export default function BlogComponent({ blog }: { blog: BlogPreviewProps }) {

    // 

    const { thumbnail, title, categoryCollection, date, excerpt, slug } = blog;

    // console.log(thumbnail)

    return (<div className="flex flex-wrap pr-10">
        <article className="flex flex-col space-y-5">
            <ContentfulImage 
                src={thumbnail.url}
                width={thumbnail.width}
                height={thumbnail.height}
                alt={thumbnail.description}
            />
            <Link href={`/blog/${slug}`}>
                <a>
                    <h2 className="m-0">{title}</h2>
                </a>
            </Link>
            <BlogDetails date={date} categoryCollection={categoryCollection}/>
            <hr/>
            <p className="text-gray-500">{excerpt}</p>
            <Link href={`/blog/${slug}`}>
                <a>
                    <button className='btn blog-button'>Read More</button>
                </a>
            </Link>
        </article>
    </div>)
}