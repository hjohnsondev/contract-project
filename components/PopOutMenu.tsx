import { useState } from "react";
import HeaderIcon from "./HeaderIcon";
import NavigationItem from "./NavigationItem";

export default function PopOutMenu ({ headerData }) {
    const icons = headerData?.actions;
    const logo = headerData?.logo?.fields?.image?.fields?.file?.url
    const altText = headerData?.logo?.fields?.image?.fields?.description;
    const headerCards = headerData?.logoCards;
    const navigationItems = headerData?.navigationMenu?.fields?.navigationItems;
    const [showSidebar, setShowSidebar] = useState(false);
    const [showDropbar, setShowDropbar] = useState(false);
    
    return (
        <nav className="md:hidden block border bg-white w-full">
            <div className="flex justify-between items-center bg-white w-full z-20 relative">
                <div className="flex items-center">
                    {showSidebar ? (
                            <button
                                className="flex text-6xl ml-3 mt-0 text-black items-center cursor-pointer"
                                onClick={() => {
                                    setShowSidebar(!showSidebar)
                                    setShowDropbar(false)
                                }}
                            >
                            <p>X</p>
                            </button>
                        ) : (
                            <svg
                                onClick={() => {
                                    setShowSidebar(!showSidebar)
                                    setShowDropbar(false)
                                }}
                                className="flex items-center ml-3 text-black cursor-pointer"
                                viewBox="0 0 100 80"
                                width="40"
                                height="40"
                            >
                                <rect width="100" height="10"></rect>
                                <rect y="30" width="100" height="10"></rect>
                                <rect y="60" width="100" height="10"></rect>
                            </svg>
                    )}
                    <img className="p-3" src={logo} alt={altText}/>
                </div>
                <div className="text-4xl mr-3 mdi mdi-dots-vertical" onClick={() => {
                    setShowDropbar(!showDropbar) 
                    setShowSidebar(false)
                }}></div>
            </div>
            <div>
                <div className={`ease-in-out duration-300 top-0 left-0 w-[65vw] border bg-white pt-10 text-white fixed h-full z-10 ${showSidebar ? "translate-x-0" : "-translate-x-full"}`}>
                    <div className="mt-6 flex flex-col w-full">
                        {navigationItems?.map((item, index) => {
                            return (<NavigationItem item={item} key={index}/>)
                        })}
                    </div>
                </div>
            </div>
            <div>
                <div className={`ease-in-out duration-300 top-0 w-full h-[20rem] border bg-white text-white fixed h-full z-10 ${showDropbar ? "opacity-100" : "opacity-0"}`}>
                    <div className="mt-16 p-3 bg-slate-100 flex justify-center items-center">
                        {icons?.map((icon, index) => {
                            return (<HeaderIcon icon={icon} key={index}/>)
                        })}
                    </div>
                    <div className="flex flex-wrap pt-4 justify-center items-center">
                        {headerCards?.map((card, index) => {
                            return (
                                <div key={index} className="flex basis-1/2 flex-col justify-center items-center h-full">
                                    <div className={`text-4xl text-sky-500 mdi mdi-${card?.fields?.materialDesignIcon?.fields?.iconName}`}></div>  
                                    <p className="text-black text-sm"><strong>{card?.fields?.title}</strong></p>
                                    <p className="text-gray-500 text-sm">{card?.fields?.subText}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </nav>
    )
}