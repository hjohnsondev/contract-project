import { getAllLandingTypes, getLandingBySlug, getPreviewLandingBySlug } from "../utils/api"
import { Layout } from "../components/Layouts/Layout";
import { GetStaticPaths, GetStaticProps } from "next";
import { LandingProps } from "types/pageTypes";

export default function page ({ landingData, preview }: LandingProps) {
  // console.log(landingData);

  return (
    <Layout landingData={landingData} preview={preview}/>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {

    const landings = await getAllLandingTypes();
    
    return {
        paths: landings.map((landing) => {
            return { params: { slug: landing.fields.slug }}
        }) ?? [],
        fallback: true
    }
}

export const getStaticProps: GetStaticProps = async (context: any) => {

  const client = context.preview ? getPreviewLandingBySlug(context.params.slug as string, context.previewData.environment) : getLandingBySlug(context.params.slug as string);

  const landingData = await client;

  return {
      props: {
        preview: context.preview || false,
        landingData
      }
  }
}