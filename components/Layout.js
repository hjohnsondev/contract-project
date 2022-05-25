import CardsSection from "./CardsSection";
import Header from "./Header";
import HeroImage from "./HeroImage";
import SectionCard from "./SectionCard";
import FancyCardScroller from "./FancyCardScroller";

export function Layout ({landingData}) {

    const sections = landingData?.fields?.sections;
    
    const components = sections.map((section, index) => {
        if (section.sys.contentType.sys.id == "header") return <Header key={index} headerData={section.fields}/>
        if (section.sys.contentType.sys.id == "heroImage") return <HeroImage key={index} heroData={section.fields}/>
        if (section.sys.contentType.sys.id == "setOfCard") return <CardsSection key={index} cardData={section.fields} style={section.fields.cards[0].fields.materialDesignIcon ? "icon" : "image"}/>
        if (section.sys.contentType.sys.id == "card") return <SectionCard key={index} section={section.fields}/>
        // if (section.sys.contentType.sys.id == "fancyCardScroller") return <FancyCardScroller key={index} scrollerData={section.fields}/>
    })

    return (
        <div>{components}</div>
    )
}