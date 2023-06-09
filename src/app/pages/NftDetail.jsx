"use client";
import React from "react";
import NftCard from "../components/NftCard";
import dummy from "../dummy";

function NftDetail({ index }) {
  const items = dummy.nfts[index];
  return (
    <section className="nft detail mt-24">
      <div
        className="container m-auto flex flex-col md:flex-row text-center md:text-left gap-10 md:gap-15 lg:gap-24 px-4 md:px-24"
        key={items.id}
      >
        <div className="basis-1/2 flex justify-center">
          <NftCard key={items.id} item={items} />
        </div>
        <div className="basis-1/2 flex flex-col gap-6 mt-2">
          <div className="flex flex-col gap-6">
            <h1>{items.nftname}</h1>
            <span>Category : {items.nftname}</span>
            <span>Price : {items.amount}</span>

            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              {items.description}
            </span>
          </div>
          <div>
            <button className="border solid border-[#14c2a3] px-4 py-2 hover:bg-[#14c2a3] rounded font-bold">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NftDetail;
