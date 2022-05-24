import Link from "next/link"
import { Config } from "../utils/Config"

export default function CategoriesMenu ({categories}) {
    const navArrow = <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" sstrokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>

    return (
        <div>
            {categories &&  <div>
                <h5 className="text-2xl mb-3"><strong>Categories</strong></h5>
                {categories.map((category) => {
                    return (
                        <div key={category}>
                            <Link href={`/blog/category/${category}`}>
                                <a className="group flex items-center">
                                    <div className="transition ease-in-out duration-700 ml-0 text-gray-400 group-hover:text-sky-500">{navArrow}</div>
                                    <p className="transition ease-in-out duration-700 m-2 text-gray-400 group-hover:text-sky-500"><strong>{category}</strong></p>
                                </a>
                            </Link>
                            <hr/>
                        </div>
                    )
                })}
            </div>}
        </div>
    )
}