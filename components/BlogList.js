import Pagination from "./Pagination";

export default function BlogList ({ blogs, totalPages, currentPage }) {

    console.log(blogs)
    console.log(totalPages)
    console.log(currentPage)

    const nextDisabled = parseInt(currentPage, 10) === parseInt(totalPages, 10);
    const prevDisabled = parseInt(currentPage, 10) === 1;

    return (<div>This is the blog page
        <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            nextDisabled={nextDisabled}
            prevDisabled={prevDisabled}
        />
    </div>)
}