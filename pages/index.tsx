import { GetStaticProps } from 'next';
import Head from 'next/head'
import { Layout } from '../components/Layouts/Layout';
import { getHomeLandingPageData } from '../utils/api'
import { landing, preview } from '../types/landing';

const Home = ({ landingData, preview = false }: landing) => {

  return (
    <Layout landingData={landingData} preview={preview}/>
  )
}

export const getStaticProps: GetStaticProps = async () => {

  const landingData = await getHomeLandingPageData();

  return {
    props: {
      landingData
    }
  }
}

export default Home
