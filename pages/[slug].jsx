import { getAllLandingTypes, getLandingBySlug } from "../utils/api"
import Head from "next/head";
import { Layout } from "../components/Layout";

export default function page (props) {
    console.log(props)
  return (
    <div>
      <Head>
        <title>landing</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/@mdi/font@6.5.95/css/materialdesignicons.min.css"></link>
      </Head>
      <main className='relative'>
        <Layout landingData={props.landingData}/>
      </main>
    </div>
  )
}

export async function getStaticPaths() {

    const landings = await getAllLandingTypes();
    
    return {
        paths: landings.map((landing) => {
            return { params: { slug: landing.fields.slug }}
        }),
        fallback: false
    }
}

export async function getStaticProps({ params }) {

    const landingData = await getLandingBySlug(params.slug);

    return {
        props: {
          landingData
        }
    }
}