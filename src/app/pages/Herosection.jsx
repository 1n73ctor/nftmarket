import React from "react";
import Image from "next/image";

function Herosection() {
  return (
    <section className="hero h-[700px]  bg-cover" id="/">
      <div className="container flex flex-col-reverse md:flex-row m-auto pt-24 text-center md:text-left gap-10 md:gap-15 lg:gap-24 px-4 md:px-0">
        <div className="flex flex-col basis-1/2 gap-6 justify-center">
          <div className="flex flex-col gap-6">
            <h2 className="text-5xl font-extrabold">
              CRYPTO NFT COLLECTIONS FOR EVERYONE
            </h2>
            <p className="text-xl">
              Lorem ipsum dolor amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
          <div>
            <button className="border soild rounded px-4 py-2 border-[#14c2a3] hover:bg-[#14c2a3] font-bold">
              Connect Wallet
            </button>
          </div>
        </div>
        <div
          className="basis-1/2 flex justify-center items-center
        "
        >
          <Image src={"/video.gif"} width={900} height={900} alt="hero img" />
        </div>
      </div>
    </section>
  );
}
export default Herosection;
