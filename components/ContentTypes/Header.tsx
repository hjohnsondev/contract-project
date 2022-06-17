import HeaderLogoAndCards from "../Common/HeaderLogoAndCards";
import HeaderTagline from "../Common/HeaderTagline";
import NavigationMenu from "./NavigationMenu";
import PopOutMenu from "../Common/PopOutMenu";
import { header } from "../../types/ContentTypes/headerTypes";

function Header (props: header) {

    const {
        fields: {
            actions,
            internalName,
            logo,
            logoCards,
            maxWidth,
            navigationMenu,
            tagline
        },
        sys,
        metadata,
    } = props

    const tagLine = props.fields.tagline;
    const icons = actions;
    const altText = logo?.fields?.image?.fields?.description;
    const navigationItems = navigationMenu?.fields?.navigationItems;

    return (
        <div>
            {tagLine && <HeaderTagline tagLine={tagLine} icons={icons}/>}
            {logo && <HeaderLogoAndCards logo={logo} logoCards={logoCards}/>}
            {navigationItems && <NavigationMenu navigationItems={navigationItems} icon={props.fields?.navigationMenu?.fields?.icon}/>}
            {navigationItems && <PopOutMenu {...props}/>}
        </div>
    )
}

export default Header;

