import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <div className="footer bg-[#141a31] mt-24 left-0 bottom-0">
      <div className="container m-auto flex flex-col justify-center py-6">
        <div className="flex justify-center gap-1">
          <Image
            src={"twitter.svg"}
            width={40}
            height={40}
            alt="social"
            className="cursor-pointer"
          ></Image>
          <Image
            src={"facebook.svg"}
            width={40}
            height={40}
            alt="social"
            className="cursor-pointer"
          ></Image>
          <Image
            src={"discord.svg"}
            width={40}
            height={40}
            alt="social"
            className="cursor-pointer"
          ></Image>
          <Image
            src={"instagram.svg"}
            width={40}
            height={40}
            alt="social"
            className="cursor-pointer"
          ></Image>
          <Image
            src={"telegram.svg"}
            width={40}
            height={40}
            alt="social"
            className="cursor-pointer"
          ></Image>
        </div>
        <div className="flex justify-center">XXX-2023 All rights reserved</div>
      </div>
    </div>
  );
}

export default Footer;
