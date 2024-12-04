"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const logos = [
  "gst",
  "zeta",
  "somfy",
  "hdl",
  "knx",
  "ahua",
  "ut",
  "jablotron",
  "milesight",
  "ajax",
];

const PartnersContainer: React.FC = () => {
  const tHome = useTranslations("site.homePage")

  return (
    <section className="relative w-full overflow-hidden pt-14 md:pt-24 flex flex-col shapedividers_com-5347">
      <div className="text-center px-3 md:px-12">
        <h3 className="text-gray-200 text-lg md:text-3xl font-semibold tracking-wide pb-2">
          {tHome("our_partners_header")}
        </h3>
        <p className="md:text-2xl md:leading-relaxed">
          {tHome("our_partners_subheader")}
        </p>
      </div>
      <div className="z-10">
        <div className="relative w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-4 gap-y-4 md:gap-y-6 mx-auto px-4 md:px-0 py-5 pb-14 md:py-8 md:pb-28 shapedividers_com-3351">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="h-[5.6rem] md:h-[7.6rem] w-full flex justify-center items-center bg-gray-100 p-1.5 md:p-7 rounded-xl"
            >
              <Image
                src={`/assets/${logo}.png`}
                alt={logo}
                width={1000}
                height={1000}
                className="w-[7rem] h-auto md:h-auto px-2"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersContainer;
