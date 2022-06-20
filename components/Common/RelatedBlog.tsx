import Link from "next/link";
import type * as CSS from 'csstype';
import { RelatedPostFields } from "../../types/contentTypes";

export default function RelatedBlog ({ date, post }: { date: string, post: RelatedPostFields }) {
    let background: CSS.Properties = {
        'backgroundImage': `url(${post.thumbnail.url})`
    }

    return (
        <div className="flex max-w-xs space-x-5 items-center mr-16 mb-5">
            <div className="bg-cover bg-center w-16 h-14 rounded-full" style={background}>
            </div>
            <div>
                <div className="flex items-center space-x-1">
                    <span className="text-sky-500 mdi mdi-arrow-right"></span>
                    <p className="text-gray-500">{date.slice(0, 10)}</p>
                </div>
                <Link href={`${post.slug}`}>
                    <a>
                        <p>{post.title.length > 35 ? post.title.slice(0, 35) + ". . ." : post.title}</p>
                    </a>
                </Link>
            </div>
        </div>
    )
}