"use client";
import React, { useState, useEffect } from "react";
import dummyData from "../dummy";
import NftCard from "../components/NftCard";
import { useRouter } from "next/navigation";
import Link from "next/link";
function Nfts() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  // const route = useRouter();

  const fetchItems = async () => {
    setLoading(true);

    const response = require("../dummy.json");
    const data = response;
    // console.log("work", data);

    const itemsPerPage = 5;
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    setItems((prevItems) => [...prevItems, ...data.nfts.slice(start, end)]);
    setPage((prevPage) => prevPage + 1);
    setLoading(false);
  };

  // useEffect(() => {
  //   fetchItems();
  // }, [page]);
  return (
    <section className="nft flex" id="nfts">
      <div className="container md:basis-1/2 m-auto mt-16 px-4 md:px-0">
        <div className="mb-16 flex items-center justify-center">
          <h1 className="text-5xl font-bold">All NFTs</h1>
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5 justify-center items-center">
          {dummyData &&
            dummyData.nfts.map((item) => {
              return (
                <Link href={"/nftitem/" + item.id} key={item.id}>
                  <NftCard item={item} />
                </Link>
              );
            })}
        </div>
        <div className="flex justify-center items-center mt-8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <button
              onClick={fetchItems}
              className="border solid border-[#14c2a3] hover:bg-[#14c2a3] hover:text-white rounded px-4 py-2"
            >
              Load More
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default Nfts;
