import { MenuProps } from "../../types/contentTypes"
import NavigationItem from "../Common/NavigationItem"

export default function NavigationMenu ({ navigationItems, icon }: MenuProps) {
    return (
        <nav className="hidden md:block bg-gray-800 w-full">
            <div className="content-wrap">
                <div className="flex justify-between items-center h-full">
                    <div className="flex space-x-8 h-full">
                        {navigationItems?.map((item, index) => {
                            return (<NavigationItem key={index} item={item}/>)
                        })}
                    </div>
                    <a href=""><div className={`mdi mdi-${icon} text-4xl text-white hover:text-sky-500`}></div></a>
                </div>
            </div>
        </nav>
    )
}