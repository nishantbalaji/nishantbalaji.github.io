import type { NextPage } from 'next'
import Head from 'next/head'
import Script from 'next/script'
import HomeSlide from './homeSlide'

const Home: NextPage = () => {

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <Head >
        <title>nishant balaji</title>
      </Head>
      <HomeSlide />
    </div>
  )
}

export default Home
