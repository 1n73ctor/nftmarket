"use client";
import React from "react";
import NftCard from "../components/NftCard";
import dummyData from "../dummy";

function Nftitems() {
  const firstNineItems = dummyData.nfts.slice(0, 9);
  return (
    <section className="nftitem mt-24" id="nfts">
      <div className="container m-auto px-4 md:px-0 grid md:grid-cols-2 lg:grid-cols-5 gap-6">
        {firstNineItems.map((item) => (
          <NftCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}

export default Nftitems;
