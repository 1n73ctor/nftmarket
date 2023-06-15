import Herosection from "./pages/Herosection";
import About from "./pages/About";
import Faq from "./pages/Faq";
import Head from "next/head";
import Nftitems from "./pages/HomeNftItems";
import Tokenomics from "./pages/Tokenomics";
import Roadmap from "./pages/Roadmap";

export default function Home() {
  return (
    <main>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Herosection />
      <About />
      <Nftitems />
      <Tokenomics />
      <Roadmap />
      <Faq />
    </main>
  );
}
