import ContentfulImage from "./ContentfulImage";

export default function BlogList ({blogsCollection, categories}) {
    console.log(blogsCollection)
const blogs = blogsCollection?.blogsCollection?.items;

    return (<article>
        <div className="md:container md:mx-auto px-48 w-full h-full">
            <div className="flex flex-col h-full w-full">
                <div className="flex h-full w-full">
                    {blogs.map((blog) => {
                        return (
                            <div className="basis-5/6">
                                <ContentfulImage width={2000} height={1000} alt={`Cover Image for ${blog.thumbnail.title}`} className="w-full" src={blog.thumbnail.url} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    </article>)
}

