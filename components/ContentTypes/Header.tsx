import HeaderLogoAndCards from "../Common/HeaderLogoAndCards";
import HeaderTagline from "../Common/HeaderTagline";
import NavigationMenu from "./NavigationMenu";
import PopOutMenu from "../Common/PopOutMenu";
import { header } from "../../types/ContentTypes/headerTypes";

function Header ({ headerData }: header) {

    const tagLine = headerData?.tagline;
    const icons = headerData?.actions;
    const logo = headerData?.logo?.fields?.image?.fields?.file?.url
    const altText = headerData?.logo?.fields?.image?.fields?.description;
    const headerCards = headerData?.logoCards;
    const navigationItems = headerData?.navigationMenu?.fields?.navigationItems;

    return (
        <div>
            {tagLine && <HeaderTagline tagLine={tagLine} icons={icons}/>}
            {logo && <HeaderLogoAndCards logo={logo} altText={altText} headerCards={headerCards}/>}
            {navigationItems && <NavigationMenu navigationItems={navigationItems} icon={headerData?.navigationMenu?.fields?.icon}/>}
            {navigationItems && <PopOutMenu headerData={headerData}/>}
        </div>
    )
}

export default Header;

