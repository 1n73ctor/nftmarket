import React from "react";

function Faq() {
  return (
    <section className="faq text-[#f5f5f5] transition-transform duration-[1.0s] ease-[ease-in-out]" id="faq">
      <div className="container flex flex-col justify-center mx-auto mt-24 px-4 md:px-0">
        <p
          data-aos="fade-down"
          className="p-2 text-xl font-[800] text-[#14c2a3] text-center"
        >
          How it works
        </p>
        <h2
          data-aos="fade-down"
          className="text-2xl font-bold text-[#f5f5f5] tracking-wider text-center"
        >
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col divide-y  divide-[#14c2a3]">
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:text-[#14c2a3]">
              What is NFT?
            </summary>
            <div data-aos="fade-left" className="px-4 pb-4">
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:text-[#14c2a3]">
              How can I contact the team?
            </summary>
            <div data-aos="fade-left" className="px-4 pb-4">
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}

export default Faq;
