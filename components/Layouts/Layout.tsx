import CardsSection from "../ContentTypes/SetOfCards";
import Header from "../ContentTypes/Header";
import HeroImage from "../ContentTypes/HeroImage";
import PreviewBanner from "../Common/PreviewBanner";
import SectionCard from "../SectionCard";
import MainLayout from "./MainLayout";
import Meta from "../Common/Meta";

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