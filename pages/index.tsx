import type { NextPage } from 'next'
import Head from 'next/head'
import { Feed, SideBar } from '../components'
import { Widgets } from '../components/Widgets'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Tweeter</title>
        <link rel="icon" href="/twitter.png" />
      </Head>

      <main>
        <SideBar />
        <Feed />
        <Widgets />
      </main>
    </div>
  )
}

export default Home
