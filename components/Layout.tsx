import CardsSection from "./SetOfCards";
import Header from "./Header";
import HeroImage from "./HeroImage";
import PreviewBanner from "./PreviewBanner.jsx";
import SectionCard from "./SectionCard";
import MainLayout from "./MainLayout";
import Meta from "./Meta";

export function Layout ({landingData, preview}) {

    const sections = landingData?.fields?.sections;
    
    const components = sections?.map((section, index) => {
        if (section.sys.contentType.sys.id == "header") return <Header key={index} headerData={section.fields}/>
        if (section.sys.contentType.sys.id == "heroImage") return <HeroImage key={index} heroData={section.fields}/>
        if (section.sys.contentType.sys.id == "setOfCard") return <CardsSection key={index} cardData={section.fields}/>
        if (section.sys.contentType.sys.id == "card") return <SectionCard key={index} section={section.fields}/>
    })

    return (
        <MainLayout>
            <Meta />
            {preview && <PreviewBanner/>}
            {components}
        </MainLayout>
    )
}