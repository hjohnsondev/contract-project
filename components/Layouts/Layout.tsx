import SetOfCards from "../ContentTypes/SetOfCards";
import Header from "../ContentTypes/Header";
import HeroImage from "../ContentTypes/HeroImage";
import PreviewBanner from "../Common/PreviewBanner";
import SectionCard from "../SectionCard";
import MainLayout from "./MainLayout";
import Meta from "../Common/Meta";
import { LandingProps } from "types/pageTypes";

export function Layout ({ landingData, preview }: LandingProps) {

    // console.log(landingData)

    const sections = landingData?.fields?.sections;
    
    const components = sections?.map((section, index: number) => {
        if (section.sys.contentType.sys.id == "header") return <Header key={index} {...section}/>
        if (section.sys.contentType.sys.id == "heroImage") return <HeroImage key={index} {...section}/>
        if (section.sys.contentType.sys.id == "setOfCard") return <SetOfCards key={index} {...section}/>
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