import { blogDetails } from "../../types/ContentTypes/blogComponentTypes"

export default function BlogDetails ({ date, categoryCollection }: blogDetails) {
    return (
        <div className="flex space-x-5">
            <span className="flex pr-5 border-r">
                <p className="mr-1 font-semibold">Date:</p>
                <p className="text-gray-500">{date.slice(0, 10)}</p>
            </span>
            <span className="flex">
                <p className="mr-1 font-semibold">{categoryCollection.items.length > 1 ? "Categories:" : "Category:"}</p>
                {categoryCollection.items.map((category, index) => {
                    return <p key={index} className={`text-gray-500 mr-1`}>{categoryCollection.items.length > 1 && index < categoryCollection.items.length - 1 ? category.categoryName + "," : category.categoryName}</p>
                })}
            </span>
        </div>
    )
}