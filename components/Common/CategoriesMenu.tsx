import Category from "./Category"

export default function CategoriesMenu ({categories}: {categories: string[]}) {
    return (
        <div>
            {categories && <div>
                <h5 className="mb-3">Categories</h5>
                {categories.map((category, index) => {
                    return (<Category key={index} category={category}/>)
                })}
            </div>}
        </div>
    )
}