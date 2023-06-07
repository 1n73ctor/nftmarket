"use client";
import React, { useState, useEffect } from "react";
import dummyData from "../dummy";
import NftCard from "../components/NftCard";
import Link from "next/link";

const PER_PAGE_ITEMS = 18;

function Nfts() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  ////////// API DATA ///////////////

  const APIdata = require("../dummy.json");
  const totalItems = Math.ceil(APIdata.nfts.length / PER_PAGE_ITEMS);

  const apiData = () =>
    new Promise((resolve, reject) => {
      const apiRes = APIdata.nfts.slice(0, page * PER_PAGE_ITEMS);
      setTimeout(() => {
        resolve(apiRes);
      }, 1000);
    });

  const fetchItems = async () => {
    try {
      setLoading(true);
      const resData = await apiData();
      setItems(resData);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, [page]);
  return (
    <section className="nft flex" id="nfts">
      <div className="container md:basis-1/2 m-auto mt-16 px-4 md:px-0">
        <div className="mb-16 flex items-center justify-center">
          <h1 className="text-5xl font-bold">All NFTs</h1>
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5 justify-center items-center">
          {items &&
            items.map((item, index) => {
              return (
                <Link key={index} href={"/nftitem/" + (item.id + 1)}>
                  <NftCard item={item} />
                </Link>
              );
            })}
        </div>
        <div className="flex justify-center items-center mt-8">
          {loading ? (
            <button className="border solid border-[#14c2a3] hover:bg-[#14c2a3] hover:text-white rounded px-4 py-2">
              Loading...
            </button>
          ) : (
            <button
              onClick={() =>
                setPage((old) => (totalItems >= old ? old + 1 : old))
              }
              className="border solid border-[#14c2a3] hover:bg-[#14c2a3] hover:text-white rounded px-4 py-2"
            >
              {items.length == APIdata.nfts.length
                ? "No more data"
                : "Load More"}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default Nfts;
