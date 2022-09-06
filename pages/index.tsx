import type { GetServerSideProps } from "next";
import Head from "next/head";
import { Feed, SideBar } from "../components";
import { Widgets } from "../components/Widgets";
import { getTweets } from "../utils/server";
import { Toaster } from "react-hot-toast"

const Home = ({ tweets }: any) => {

  return (
    <div className="mx-auto max-h-screen overflow-hidden lg:max-w-6xl">
      <Head>
        <title>Tweeter</title>
        <link rel="icon" href="/twitter.png" />
      </Head>
      <Toaster />

      <main className="grid grid-cols-9">
        <div className="col-span-2">
          <SideBar />
        </div>
        <div className="col-span-7 border-x lg:col-span-5">
          <Feed tweets={tweets}/>
        </div>
        <div className="col-span-2 hidden lg:inline">
          <Widgets />
        </div>
      </main>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const tweets = JSON.parse(JSON.stringify(await getTweets()));

  return {
    props: {
      tweets,
    },
  };
};
