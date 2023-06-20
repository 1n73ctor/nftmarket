import Image from "next/image";
import React from "react";

const Tokenomics = () => {
  const style = {
    div_style:
      "shadow-[0_0_15px_#3d0cee] bg-[#d414d4] w-6/12 h-[30px] rounded-[5px_0_0_5px] relative mb-[55px] lg:after:content-[''] lg:after:absolute lg:after:-translate-x-2/4 lg:after:w-px lg:after:h-10 lg:after:border-l-[#b6b7b7] lg:after:border-l lg:after:border-solid lg:after:left-2/4 lg:after:top-10 lg:after:box-border",
    div_p:
      "absolute lg:-translate-x-2/4 lg:left-2/4 bottom-[-35px] lg:-bottom-20 whitespace-nowrap",
  };
  return (
    <section className="tokenomics container m-auto mt-24 px-4 md:px-0 transition-transform duration-[5.0s] ease-[ease-in-out] scroll-smooth" id="tokenomics">
      <div className="my-10">
        <h2 className="before:content-['--'] text-[#14c2a3] text-lg">
          Tokenomics
        </h2>
      </div>
      <div className="lg:flex" data-aos="zoom-up">
        <div className={style.div_style}>
          <p className={style.div_p}>
            <span>50%</span> Public Sale
          </p>
        </div>
        <div className="progress_item shadow-[0_0_15px_#16bf86] bg-[#1cc05b]  w-3/12 h-[30px] relative mb-[55px] lg:after:content-[''] lg:after:absolute lg:after:-translate-x-2/4 lg:after:w-px lg:after:h-10 lg:after:border-l-[#b6b7b7] lg:after:border-l lg:after:border-solid lg:after:left-2/4 lg:after:top-10 lg:after:box-border">
          <p className={style.div_p}>
            <span>30%</span> Private Sale
          </p>
        </div>
        <div className="progress_item shadow-[0_0_15px_#16bf86] bg-[#2714d4] w-2/12 h-[30px] relative mb-[55px] lg:after:content-[''] lg:after:absolute lg:after:-translate-x-2/4 lg:after:w-px lg:after:h-10 lg:after:border-l-[#b6b7b7] lg:after:border-l lg:after:border-solid lg:after:left-2/4 lg:after:top-10 lg:after:box-border">
          <p className={style.div_p}>
            <span>20%</span> Marketing
          </p>
        </div>
        <div className="progress_item shadow-[0_0_15px_#16bf86] bg-[#b86f33] rounded-[0_5px_5px_0] w-1/12 h-[30px] relative mb-[55px] lg:after:content-[''] lg:after:absolute lg:after:-translate-x-2/4 lg:after:w-px lg:after:h-10 lg:after:border-l-[#b6b7b7] lg:after:border-l lg:after:border-solid lg:after:left-2/4 lg:after:top-10 lg:after:box-border">
          <p className={style.div_p}>
            <span>10%</span> Ecosystem
          </p>
        </div>
      </div>
      <div className="w-full mx-auto flex flex-col lg:flex-row my-24 ">
        <div className="flex flex-col gap-4 basis-1/2 px-2 lg:px-10 items-center" data-aos="fade-right">
          <div className="w-full flex mx-auto justify-between">
            <p>Name : </p>
            <p>Horse Mania </p>
          </div>
          <div className="w-full flex mx-auto justify-between">
            <p>Purchase Method : </p>
            <p>BTC , ETH </p>
          </div>
          <div className="w-full flex mx-auto justify-between">
            <p>Presale </p>
            <p>Ongoing </p>
          </div>
          <div className="w-full flex mx-auto justify-between">
            <p>Personal Cap</p>
            <p>Unlimited</p>
          </div>
          <div className="w-full flex mx-auto justify-between">
            <p>Whitelist</p>
            <p>Yes</p>
          </div>
          <div className="w-full flex mx-auto justify-between">
            <p>Total Supply </p>
            <p>Horse Mania </p>
          </div>
        </div>
        <div className="hidden lg:flex basis-1/2 lg:px-10 items-center justify-center" data-aos="fade-left">
          <Image src={"/logo.png"} width={200} height={200} alt="Logo"></Image>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
