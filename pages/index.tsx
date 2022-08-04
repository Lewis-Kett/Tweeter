import type { NextPage } from 'next'
import Head from 'next/head'
import { SideBar } from '../components'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Tweeter</title>
        <link rel="icon" href="/twitter.png" />
      </Head>

      <main>
        <SideBar />
        {/* {Feed} */}
        {/* {Widgets} */}
      </main>
    </div>
  )
}

export default Home
