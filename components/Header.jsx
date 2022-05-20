import Link from "next/link";
import { useRouter } from "next/router";

function Header ({headerData = null}) {

    const tagLine = headerData?.tagline;
    const icons = headerData?.actions;
    const logo = headerData?.logo?.fields?.image?.fields?.file?.url
    const altText = headerData?.logo?.fields?.image?.fields?.description;
    const headerCards = headerData?.logoCards;
    const navigationItems = headerData?.navigationMenu?.fields?.navigationItems;

    const navArrow = <svg className="w-4 h-4 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" sstrokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>

    const router = useRouter();
    return (
        <div>
            {tagLine && <div className="w-full bg-slate-100 top-0 left-0 relative h-full">
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

            {logo && <div className="w-full bg-white top-0 left-0 relative h-full">
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
            {navigationItems && <nav className="bg-gray-800 top-0 w-full">
                <div className="md:container md:mx-auto px-48 h-full">
                    <div className="flex justify-between items-center h-full">
                        <div className="flex space-x-8 h-full">
                            {navigationItems?.map((item, index) => {
                                return (
                                    <div key={index} className="flex items-center h-full group">
                                        <Link href={`/${item?.fields?.label != "Home" ? item?.fields?.label : ""}`}><button id={`dropdown${item?.fields?.label}Button`} data-dropdown-toggle={`dropdown${item?.fields?.label}`} className={`py-4 ${router.pathname.includes(item.label) || router.pathname == "/" && item?.fields?.label == "Home" ? "text-sky-500" : "text-white"} group-hover:text-sky-500`}><strong>{item?.fields?.label}</strong></button></Link>
                                        <div className="ml-0 group-hover:rotate-180">{navArrow}</div>
                                    </div>
                                )
                            })}
                        </div>
                        <a href=""><div className={`mdi mdi-${headerData?.navigationMenu?.fields?.icon} text-4xl text-white hover:text-sky-500`}></div></a>
                    </div>
                </div>
            </nav>}
            
        </div>
    )
}

export default Header;

