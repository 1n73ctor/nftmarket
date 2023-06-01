"use client";
import React from "react";
import Image from "next/image";

function NftCard({ item, onClick }) {
  if (item) {
    return (
      <div
        className="border solid rounded border-[#14c2a3] m-auto p-3 gap-6 hover:shadow-[#14c2a3_0px_4px_5px,#14c2a3_0px_-3px_7px,#14c2a3_0px_2px_3px,#14c2a3_0px_3px_4px,#14c2a3_0px_-1px_2px]"
        onClick={() => onClick(item.id)}
      >
        <Image src={`/${item.src}`} width={500} height={500} alt="nft image" />
        <div className="mt-4">
          <span>{item.nftname}</span>
        </div>
      </div>
    );
  } else {
    return <h1>Loading</h1>;
  }
}
export default NftCard;
