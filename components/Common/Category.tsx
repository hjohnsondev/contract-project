import Link from "next/link"
import { navArrow } from "./SVG"

export default function Category ({category, key}: {category: string, key: number}) {
    
    return (
        <div key={category}>
            <Link href={`/blog/category/${category}`}>
                <a className="group flex items-center my-2 not-prose">
                    <div className="transition ease-in-out duration-700 ml-0 text-gray-400 group-hover:text-sky-500">{navArrow}</div>
                    <p className="category">{category}</p>
                </a>
            </Link>
            <hr className="m-0"/>
        </div>
    )
}