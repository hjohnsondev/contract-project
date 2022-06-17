import Link from "next/link";
import { useRouter } from "next/router";
import { itemTypes } from "../../types/ContentTypes/headerTypes";

export default function NavigationItem ({ item}: itemTypes) {
    const navArrow = 
        <svg 
            className="w-4 h-4 text-sky-500" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg">
            <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="4" 
                d="M19 9l-7 7-7-7">
            </path>
        </svg>

    const router = useRouter();

    const label = item?.fields?.label;
    return (
        <div className={`flex items-center justify-between h-full py-3 px-3 md:px-0 group ${router.pathname.includes(label.toLowerCase()) || router.pathname == "/" && label == "Home" ? "nav-item-selected" : ""}`}>
            <Link href={`/${label != "Home" ? label.toLowerCase() : ""}`}><button className={`nav-item ${router.pathname.includes(label.toLowerCase()) || router.pathname == "/" && label == "Home" ? "nav-item-selected" : ""} group-hover:text-sky-500`}>{label}</button></Link>
            <div className="ml-0 group-hover:rotate-180">{navArrow}</div>
        </div>
    )
}