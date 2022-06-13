import { getAllLandingTypes, getLandingBySlug, getPreviewLandingBySlug } from "../utils/api"
import Head from "next/head";
import { Layout } from "../components/Layout";
import { GetStaticPaths, GetStaticProps } from "next";
import { landing } from "../types/landing";
import MainLayout from "../components/MainLayout";

export default function page (props: landing) {
  return (
    <Layout landingData={props.landingData} preview={props.preview}/>
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