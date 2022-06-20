import { GetStaticProps } from 'next';
import Head from 'next/head'
import { LandingProps } from 'types/pageTypes';
import { Layout } from '../components/Layouts/Layout';
import { getHomeLandingPageData } from '../utils/api'

const Home = ({ landingData, preview = false }: LandingProps) => {

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
