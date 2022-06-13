import Pagination from "./Pagination";
import CategoriesMenu from "./CategoriesMenu";
import BlogComponent from "./BlogComponent";

export default function BlogList ({ blogs, totalPages, currentPage, allCategories }) {

    const nextDisabled = parseInt(currentPage, 10) === parseInt(totalPages, 10);
    const prevDisabled = parseInt(currentPage, 10) === 1;

    return (<div className="md:container md:mx-auto px-48 h-full">
        <div className="flex flex-wrap mt-10">
            <div className="flex flex-col space-y-10 basis-3/4">
                {blogs.map((blog, index) => (
                    <BlogComponent key={index} blog={blog}/>
                ))}
            </div>
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