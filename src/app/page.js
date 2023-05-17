import Herosection from "./pages/Herosection";
import About from "./pages/About";
import Faq from "./pages/Faq";
import Head from "next/head";
// import DummyData from "./dummyData";
import Nfts from "./pages/Nfts";
import NftDetail from "./pages/NftDetail";
import Nftitems from "./pages/Nftitems";

export default function Home() {
  // const NFTDATA = [
  //   {
  //     src: "a.jpg",
  //     nftname: "img1",
  //     category: "game",
  //     price: 200,
  //     about: "test",
  //   },
  //   {
  //     src: "a.jpg",
  //     nftname: "img2",
  //   },
  //   {
  //     src: "a.jpg",
  //     nftname: "img3",
  //   },
  //   {
  //     src: "a.jpg",
  //     nftname: "img4",
  //   },
  //   {
  //     src: "a.jpg",
  //     nftname: "img5",
  //   },
  //   {
  //     src: "a.jpg",
  //     nftname: "img6",
  //   },
  //   {
  //     src: "a.jpg",
  //     nftname: "img7",
  //   },
  //   {
  //     src: "a.jpg",
  //     nftname: "img8",
  //   },
  //   {
  //     src: "a.jpg",
  //     nftname: "img9",
  //   },
  // ];
  return (
    <main>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Herosection /> 
      <About />
      <Nftitems />
      <Faq />
      {/* <NftDetail /> */}
      {/* <Nftitems /> */}
    </main>
  );
}
