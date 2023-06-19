"use client";
import { useEffect } from "react";
import Herosection from "./pages/Herosection";
import About from "./pages/About";
import Faq from "./pages/Faq";
import Head from "next/head";
import Nftitems from "./pages/HomeNftItems";
import Tokenomics from "./pages/Tokenomics";
import Roadmap from "./pages/Roadmap";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);
  return (
    <main>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Herosection />
      {/* <About /> */}
      <Nftitems />
      <Tokenomics />
      <Roadmap />
      <Faq />
    </main>
  );
}
