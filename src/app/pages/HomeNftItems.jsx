"use client";
import React from "react";
import NftCard from "../components/NftCard";
import dummyData from "../dummy";
import { useRouter } from "next/navigation";

function HomeNftItems() {
  const route = useRouter();

  return (
    <section className="nftitem mt-24" id="nfts">
      <div className="container m-auto px-4 md:px-0 grid md:grid-cols-2 lg:grid-cols-5 gap-6">
        {dummyData &&
          dummyData.nfts.slice(0, 10).map((item) => {
            return (
              <NftCard
                key={item.id}
                item={item} 
                onClick={() => {
                  route.push("/nfts/[id]");
                }}
              />
            );
          })}
      </div>
    </section>
  );
}

export default HomeNftItems;