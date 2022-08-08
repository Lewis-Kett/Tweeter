import type { NextPage } from "next";
import Head from "next/head";
import { Feed, SideBar } from "../components";
import { Widgets } from "../components/Widgets";

const Home: NextPage = () => {
  return (
    <div className="mx-auto max-h-screen overflow-hidden lg:max-w-6xl">
      <Head>
        <title>Tweeter</title>
        <link rel="icon" href="/twitter.png" />
      </Head>

      <main className="grid grid-cols-9">
        <div className="col-span-2">
          <SideBar />
        </div>
        <div className="col-span-7 border-x lg:col-span-5">
          <Feed />
        </div>
        <div className="col-span-2 hidden lg:inline">
          <Widgets />
        </div>
      </main>
    </div>
  );
};

export default Home;
