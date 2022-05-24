import Pagination from "./Pagination";
import CategoriesMenu from "./CategoriesMenu";
import Link from "next/link";
import { Config } from "../utils/Config";

export default function BlogList ({ blogs, totalPages, currentPage, allCategories }) {

    const nextDisabled = parseInt(currentPage, 10) === parseInt(totalPages, 10);
    const prevDisabled = parseInt(currentPage, 10) === 1;

    return (<div className="md:container md:mx-auto px-48 h-full">
        <div className="flex flex-wrap">
            <ol className="basis-3/4">
                {blogs.map((blog) => (
                <li key={blog.title}>
                    <article>
                    <Link href={`${Config.pageMeta.blogIndex.slug}/${blog.slug}`}>
                        <a>
                        <h2>
                            {blog.title}
                        </h2>
                        </a>
                    </Link>
                    {blog.categoryCollection.items !== null && <div>{
                        blog.categoryCollection.items.map((category) => {
                            return <p key={category.categoryName}>{category.categoryName}</p>
                        })
                        }</div>}
                    <div>
                    </div>
                    </article>
                </li>
                ))}
            </ol>
            <div className="basis-1/4">
                <CategoriesMenu categories={allCategories}/>
            </div>
            
        </div>

        <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            nextDisabled={nextDisabled}
            prevDisabled={prevDisabled}
        />
    </div>)
}