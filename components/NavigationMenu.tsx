import NavigationItem from "./NavigationItem"

export default function NavigationMenu ({ navigationItems, headerData }) {
    return (
        <nav className="hidden md:block bg-gray-800 w-full">
            <div className="content-wrap">
                <div className="flex justify-between items-center h-full">
                    <div className="flex space-x-8 h-full">
                        {navigationItems?.map((item, index) => {
                            return (<NavigationItem key={index} item={item}/>)
                        })}
                    </div>
                    <a href=""><div className={`mdi mdi-${headerData?.navigationMenu?.fields?.icon} text-4xl text-white hover:text-sky-500`}></div></a>
                </div>
            </div>
        </nav>
    )
}