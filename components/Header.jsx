import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

function Header ({headerData = null, blogHeader = false}) {

    const tagLine = headerData?.tagline;
    const icons = headerData?.actions;
    const logo = headerData?.logo?.fields?.image?.fields?.file?.url
    const altText = headerData?.logo?.fields?.image?.fields?.description;
    const headerCards = headerData?.logoCards;
    const navigationItems = headerData?.navigationMenu?.fields?.navigationItems;

    const navArrow = <svg className="w-4 h-4 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" sstrokeLinejoin="round" strokeWidth="6" d="M19 9l-7 7-7-7"></path></svg>

    const router = useRouter();
    const [showSidebar, setShowSidebar] = useState(false);
    const [showDropbar, setShowDropbar] = useState(false);

    if (blogHeader) {
        const tagLine = headerData.tagline;
        const icons = headerData.actionsCollection.items;
        const logo = headerData.logo.image.url;
        const altText = headerData.logo.altText;
        const headerCards = headerData.logoCardsCollection.items;
        const navigationItems = headerData.navigationMenu.navigationItemsCollection.items;

        return (
            <div>
                {tagLine && <div className="md:w-full bg-slate-100 top-0 left-0 relative h-full">
                    <div className="md:container md:mx-auto px-48 h-full">
                        <div className="flex justify-between items-center h-full">
                            <p className="text-gray-500 py-4">{tagLine}</p>
                            <div className="flex items-center h-full">
                                {icons?.map((icon, index) => {
                                    return (
                                        <a key={index} href=""><div className={`ml-3 text-2xl text-gray-500 hover:text-sky-500 mdi mdi-${icon.materialDesignIcon.iconName}`}></div></a>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>}
    
                {logo && <div className="w-full bg-white top-0 left-0 relative h-full">
                    <div className="md:container md:mx-auto px-48 h-full">
                        <div className="flex justify-between items-center h-full">
                            <img className="py-7" src={logo} alt={altText}/>
                            <div className="flex items-center space-x-20 h-full">
                                {headerCards?.map((card, index) => {
                                    return (
                                        <div key={index} className="flex items-center ml-3 h-full">
                                            <div className={`mr-3 text-4xl text-sky-500 mdi mdi-${card?.materialDesignIcon?.iconName}`}></div>  
                                            <div>
                                                <p><strong>{card?.title}</strong></p>
                                                <p className="text-gray-500">{card?.subText}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>}
                {navigationItems && <nav className="bg-gray-800 top-0 w-full">
                    <div className="md:container md:mx-auto px-48 h-full">
                        <div className="flex justify-between items-center h-full">
                            <div className="flex space-x-8 h-full">
                                {navigationItems?.map((item, index) => {
                                    return (
                                        <div key={index} className="flex items-center h-full group">
                                            <Link href={`/${item?.label != "Home" ? item?.label.toLowerCase() : ""}`}><button id={`dropdown${item?.label}Button`} data-dropdown-toggle={`dropdown${item?.label}`} className={`py-4 ${router.pathname.includes(item.label.toLowerCase()) || router.pathname == "/" && item?.label == "Home" ? "text-sky-500" : "text-white"} group-hover:text-sky-500`}><strong>{item?.label}</strong></button></Link>
                                            <div className="ml-0 group-hover:rotate-180">{navArrow}</div>
                                        </div>
                                    )
                                })}
                            </div>
                            <a href=""><div className={`mdi mdi-${headerData?.navigationMenu?.icon} text-4xl text-white hover:text-sky-500`}></div></a>
                        </div>
                    </div>
                </nav>}
            </div>
        )
    }
    return (
        <div>
            {tagLine && <div className="hidden md:block w-full bg-slate-100 top-0 left-0 relative h-full">
                <div className="md:container md:mx-auto px-48 h-full">
                    <div className="flex justify-between items-center h-full">
                        <p className="text-gray-500 py-4">{tagLine}</p>
                        <div className="flex items-center h-full">
                            {icons?.map((icon, index) => {
                                return (
                                    <a key={index} href=""><div className={`ml-3 text-2xl text-gray-500 hover:text-sky-500 mdi mdi-${icon.fields.materialDesignIcon.fields.iconName}`}></div></a>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>}

            {logo && <div className="hidden md:block w-full bg-white top-0 left-0 relative h-full">
                <div className="md:container md:mx-auto px-48 h-full">
                    <div className="flex justify-between items-center h-full">
                        <img className="py-7" src={logo} alt={altText}/>
                        <div className="flex items-center space-x-20 h-full">
                            {headerCards?.map((card, index) => {
                                return (
                                    <div key={index} className="flex items-center ml-3 h-full">
                                        <div className={`mr-3 text-4xl text-sky-500 mdi mdi-${card?.fields?.materialDesignIcon?.fields?.iconName}`}></div>  
                                        <div>
                                            <p><strong>{card?.fields?.title}</strong></p>
                                            <p className="text-gray-500">{card?.fields?.subText}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>}
            {navigationItems && <nav className="hidden md:block bg-gray-800 w-full">
                <div className="md:container md:mx-auto md:px-48 h-full">
                    <div className="flex justify-between items-center h-full">
                        <div className="flex space-x-8 h-full">
                            {navigationItems?.map((item, index) => {
                                return (
                                    <div key={index} className="flex items-center h-full group">
                                        <Link href={`/${item?.fields?.label != "Home" ? item?.fields?.label.toLowerCase() : ""}`}><button id={`dropdown${item?.fields?.label}Button`} data-dropdown-toggle={`dropdown${item?.fields?.label}`} className={`py-4 md:text-md text-sm ${router.pathname.includes(item.fields?.label.toLowerCase()) || router.pathname == "/" && item?.fields?.label == "Home" ? "text-sky-500" : "text-white"} group-hover:text-sky-500`}><strong>{item?.fields?.label}</strong></button></Link>
                                        <div className="ml-0 group-hover:rotate-180">{navArrow}</div>
                                    </div>
                                )
                            })}
                        </div>
                        <a href=""><div className={`mdi mdi-${headerData?.navigationMenu?.fields?.icon} text-4xl text-white hover:text-sky-500`}></div></a>
                    </div>
                </div>
            </nav>}
            {navigationItems && <nav className="md:hidden block border bg-white w-full">
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
                                return (
                                    <div key={index} className={`flex items-center justify-between h-full px-4 ${router.pathname.includes(item.fields?.label.toLowerCase()) || router.pathname == "/" && item?.fields?.label == "Home" ? "bg-sky-500" : ""}`}>
                                        <Link href={`/${item?.fields?.label != "Home" ? item?.fields?.label.toLowerCase() : ""}`}><button className={`py-4 md:text-md ${router.pathname.includes(item.fields?.label.toLowerCase()) || router.pathname == "/" && item?.fields?.label == "Home" ? "text-white" : "text-sky-500"}`}><strong>{item?.fields?.label}</strong></button></Link>
                                        <div className={`ml-0 ${router.pathname.includes(item.fields?.label.toLowerCase()) || router.pathname == "/" && item?.fields?.label == "Home" ? "rotate-180 text-white" : "text-sky-500"}`}>{navArrow}</div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div>
                    <div className={`ease-in-out duration-300 top-0 w-full h-[20rem] border bg-white text-white fixed h-full z-10 ${showDropbar ? "opacity-100" : "opacity-0"}`}>
                        <div className="mt-16 p-3 bg-slate-100 flex justify-center items-center">
                            {icons?.map((icon, index) => {
                                return (
                                    <a key={index} href=""><div className={`ml-3 text-2xl text-gray-500 hover:text-sky-500 mdi mdi-${icon.fields.materialDesignIcon.fields.iconName}`}></div></a>
                                )
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
            </nav>}
        </div>
    )
}

export default Header;

