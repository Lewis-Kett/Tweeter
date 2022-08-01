import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Tweeter</title>
        <link rel="icon" href="/twitter.png" />
      </Head>

      <main>
        Hello world
      </main>
    </div>
  )
}

export default Home
