import Herosection from "./pages/Herosection";
import About from "./pages/About";
import Faq from "./pages/Faq";
import Head from "next/head";
import Nftitems from "./pages/HomeNftItems";

export default function Home() {
  return (
    <main>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Herosection />
      <About />
      <Nftitems />
      <Faq />
    </main>
  );
}
