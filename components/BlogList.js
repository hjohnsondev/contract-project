import Pagination from "./Pagination";
import Link from "next/link";
import { Config } from "../utils/Config";

export default function BlogList ({ blogs, totalPages, currentPage }) {

    const allCategories = [];
    blogs.forEach((blog) => {
        blog.categoryCollection.items.forEach((category) => {
            if (!allCategories.includes(category.categoryName)) allCategories.push(category.categoryName);
        })
    });

    const nextDisabled = parseInt(currentPage, 10) === parseInt(totalPages, 10);
    const prevDisabled = parseInt(currentPage, 10) === 1;

    return (<div className="md:container md:mx-auto px-48 h-full">
        <div className="flex">
            <ol className="">
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
        </div>

        <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            nextDisabled={nextDisabled}
            prevDisabled={prevDisabled}
        />
    </div>)
}