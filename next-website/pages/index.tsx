import type { NextPage } from 'next'
import Head from 'next/head'
import Script from 'next/script'
import HomeSlide from './homeSlide'

const Home: NextPage = () => {

  return (
    <div>
      <Head >
        <title>nishant balaji</title>
      </Head>
      <HomeSlide />
    </div>
  )
}

export default Home
