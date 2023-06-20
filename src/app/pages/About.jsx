"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

function About() {
  const router = useRouter();
  return (
    <section className="about mt-24 transition-transform duration-[1.0s] ease-[ease-in-out]" id="about">
      <div className="container flex flex-col md:flex-row m-auto text-center md:text-left gap-10 md:gap-15 lg:gap-24">
        <div className="basis-1/2 flex flex-col gap-6 px-4 lg:px-0" data-aos="fade-right">
          <div className="flex flex-col gap-6">
            <h2 className="text-[#14c2a3] text-lg">About Us</h2>
            <p className="text-white text-4xl font-bold">What is NFT Project</p>
            <span className="text-xl">
              orem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex commodo consequat. Duis aute irure
              reprehenderi.
            </span>
          </div>
          <div>
            <button
              className="border solid rounded px-3 py-2 border-[#14c2a3] hover:bg-[#14c2a3] font-bold"
              onClick={() => router.push("/nfts")}
            >
              Buy NFT
            </button>
          </div>
        </div>
        <div className="basis-1/2 flex flex-col gap-6 px-4 lg:px-0">
          <div className="border solid rounded border-[#14c2a3] p-3 bg-[#0e2331] hover:shadow-[#14c2a3_0px_4px_5px,#14c2a3_0px_-3px_7px,#14c2a3_0px_2px_3px,#14c2a3_0px_3px_4px,#14c2a3_0px_-1px_2px]" data-aos="flip-up">
            <h1 className="text-xl">Heading Goes here</h1>
            <span className="text-[#B9B9BF]">
              orem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex commodo consequat. Duis aute irure
              reprehenderi.
            </span>
          </div>
          <div className="border solid rounded border-[#14c2a3] p-3 bg-[#0e2331] hover:shadow-[#14c2a3_0px_4px_5px,#14c2a3_0px_-3px_7px,#14c2a3_0px_2px_3px,#14c2a3_0px_3px_4px,#14c2a3_0px_-1px_2px]" data-aos="flip-up">
            <h1 className="text-xl">Heading Goes here</h1>
            <span className="text-[#B9B9BF]">
              orem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex commodo consequat. Duis aute irure
              reprehenderi.
            </span>
          </div>
          <div className="border solid rounded border-[#14c2a3] p-3 bg-[#0e2331] hover:shadow-[#14c2a3_0px_4px_5px,#14c2a3_0px_-3px_7px,#14c2a3_0px_2px_3px,#14c2a3_0px_3px_4px,#14c2a3_0px_-1px_2px]" data-aos="flip-up">
            <h1 className="text-xl">Heading Goes here</h1>
            <span className="text-[#B9B9BF]">
              orem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex commodo consequat. Duis aute irure
              reprehenderi.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
