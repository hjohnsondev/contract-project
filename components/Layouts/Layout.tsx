import SetOfCards from "../ContentTypes/SetOfCards";
import Header from "../ContentTypes/Header";
import HeroImage from "../ContentTypes/HeroImage";
import PreviewBanner from "../Common/PreviewBanner";
import SectionCard from "../SectionCard";
import MainLayout from "./MainLayout";
import Meta from "../Common/Meta";
import { landing } from "../../types/landing";

export function Layout ({ landingData, preview }: landing) {

    const sections = landingData?.sections;
    
    const components = sections?.map((section: any, index: number) => {
        if (section.sys.contentType.sys.id == "header") return <Header key={index} headerData={section.fields}/>
        if (section.sys.contentType.sys.id == "heroImage") return <HeroImage key={index} heroData={section.fields}/>
        if (section.sys.contentType.sys.id == "setOfCard") return <SetOfCards key={index} cardData={section.fields}/>
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