import Head from "next/head";
import Action from "../components/Action";
import Hero from "../components/Hero";
import Installation from "../components/Installation";
import Working from "../components/Working";

import type { NextPage } from "next";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <div className="w-screen overflow-x-hidden">
      <div className="mx-auto max-w-6xl">
        <Head>
          <title>React &amp; Next.js snippets</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Hero />
        <Action />
        <Working />
        <Installation />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
