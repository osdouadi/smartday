"use client"

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";

const OurVisionContainer = () => {
  const { locale } = useParams();
  const tHome = useTranslations("site.homePage")

  return (
    <section className="relative flex items-center justify-between ltr:flex-row-reverse bg-gray-100 pr-6 md:pr-10 pb-12 md:pb-0 overflow-hidden">
      <Image
        src={"/assets/asset_09.png"}
        alt="smartday"
        width={1000}
        height={1000}
        className="w-[9rem] md:w-[25rem] absolute top-0 right-0 opacity-85"
      />
      <div className="w-full md:w-[60vw] flex justify-center">
        <motion.div
          initial={
            locale === "ar" ? { opacity: 0, x: 200 } : { opacity: 0, x: -200 }
          }
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full px-3 ltr:pr-3 py-4 md:py-6 md:pr-5 md:-mt-5 z-20 text-gray-900"
        >
          <h3 className="text-lg md:text-3xl font-bold tracking-wide pb-1">
            {tHome("our_vision")}
          </h3>
          <p className="md:text-2xl md:leading-relaxed relative after:absolute after:bg-gray-900 after:w-[0.2rem] after:h-[33%] after:rounded-full after:-right-4 after:-left-4 after:-top-5">
            <span className="bg-gray-900 rounded-full w-2.5 h-2.5 absolute -top-7 right-[-1.2rem] ltr:left-[-1.2rem]"></span>
            {tHome("our_vision_content")}
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="mt-5"
          >
            <Image
              src={"/assets/asset_12.png"}
              alt="smartday"
              width={1000}
              height={1000}
              className="w-[15rem] md:!w-[24rem] lg:w-[20rem] h-auto -mb-12"
            />
          </motion.div>
        </motion.div>
      </div>
      <div className="w-[33vw] h-[54vw] hidden md:block">
        <Image
          src={"/assets/3.png"}
          alt="smartday"
          width={2000}
          height={2000}
          className="absolute w-[33vw] h-full object-contain rounded-b-md"
        />
        <Image
          src={"/assets/logo.png"}
          alt="smartday"
          width={2000}
          height={2000}
          className="absolute w-[5.5rem] h-auto top-10 left-5"
        />
        <div className="absolute w-full h-[5%] bg-gray-100 bottom-0 left-0 right-0 opacity-95 blur-md"></div>
      </div>
    </section>
  );
};

export default OurVisionContainer;
