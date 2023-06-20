"use client";
import React from "react";
import NftCard from "../components/NftCard";
import dummyData from "../dummy";
import Link from "next/link";

function HomeNftItems() {
  return (
    <section className="nftitem mt-24" id="nfts">
      <div className="container m-auto px-4 lg:px-0 grid md:grid-cols-2 lg:grid-cols-5 gap-6">
        {dummyData &&
          dummyData.nfts.slice(0, 10).map((item) => {
            return (
              <Link href={"/nftitem/" + (item.id + 1)} key={item.id}>
                <NftCard item={item} />
              </Link>
            );
          })}
      </div>
    </section>
  );
}

export default HomeNftItems;
