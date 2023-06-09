"use client";
import React, { useState } from "react";
import style from "../styles/navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
const Nav_Items = [
  { label: "Home", page: "/" },
  { label: "About", page: "about" },
  { label: "NFT", page: "nfts" },
  { label: "FAQ", page: "faq" },
  { label: "Tokenomics", page: "tokenomics" },
];

function Navabar() {
  const [navbar, setNavbar] = useState(false);
  const router = useRouter();

  return (
    <section className="navbar">
      <nav className="w-full text-[white] bg-[#141a31]">
        <div className="justify-between px-4 py-3 mx-auto md:items-center md:flex md:px-12">
          <div className="flex items-center justify-between md:block">
            <Link href="/" scroll={false}>
              <Image
                src={"/logo.png"}
                width={100}
                height={100}
                alt="logo"
                priority
              />
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => {
                  setNavbar(!navbar);
                }}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-[#f5f5f5]"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-[#f5f5f5]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul
                onClick={() => setNavbar(!navbar)}
                className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0"
              >
                {Nav_Items.map((items, ids) => {
                  if (items.page === "nfts") {
                    return (
                      <Link href={"/nfts"} key={ids}>
                        <li className={style.nav_item}>{items.label}</li>
                      </Link>
                    );
                  } else {
                    return (
                      <li key={ids} className={style.nav_item}>
                        <a href={"/#" + items.page}>{items.label}</a>
                      </li>
                    );
                  }
                })}
              </ul>
            </div>
          </div>
          <div>
            <button className="border solid rounded border-[#14c2a3] px-3 py-2 hidden md:block hover:bg-[#14c2a3] font-bold">
              Connect Wallet
            </button>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default Navabar;
