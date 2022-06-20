import HeaderLogoAndCards from "../Common/HeaderLogoAndCards";
import HeaderTagline from "../Common/HeaderTagline";
import NavigationMenu from "./NavigationMenu";
import PopOutMenu from "../Common/PopOutMenu";
import { HeaderProps } from "../../types/contentTypes";

function Header (props: HeaderProps) {

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

