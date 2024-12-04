"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";

const CompanyFeatures = () => {
  const tHome = useTranslations("site.homePage");
  const { locale } = useParams();
  return (
    <section className="relative flex flex-col">
      <div className="absolute -top-2.5 right-0 left-0 w-full h-4 bg-background z-10 opacity-90 blur-sm"></div>
      <div className="absolute -top-2 right-0 left-0 w-full h-5 bg-background z-10 opacity-75 blur-sm"></div>
      <div className="w-full h-[60vw] md:h-[35vw] relative">
        <div className="absolute w-full h-full top-0 bottom-0 left-0 right-0 bg-gray-800 opacity-45 blur-2xl z-10"></div>
        <Image
          src={"/assets/0.jpg"}
          alt="smartday"
          width={2000}
          height={2000}
          className="absolute w-full h-full"
        />
      </div>
      <div className="w-full relative bg-gray-50 flex items-center justify-center py-8 px-5 md:py-20 md:px-14">
        <div className="absolute -top-2 w-full h-4 bg-gray-50 blur-sm"></div>
        <div className="absolute -top-2 w-full h-4 bg-gray-50 blur-md"></div>
        <Image
          src={"/assets/asset_09.png"}
          alt="smartday"
          width={1000}
          height={1000}
          className="w-[9rem] md:w-[25rem] absolute top-0 right-0 opacity-85"
        />
        <Image
          src={"/assets/asset_09.png"}
          alt="smartday"
          width={1000}
          height={1000}
          className="w-[9rem] md:w-[25rem] absolute bottom-0 left-0 opacity-85 rotate-180"
        />
        <motion.p
          initial={
            locale === "ar" ? { opacity: 0, x: 200 } : { opacity: 0, x: -200 }
          }
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="text-base ltr:md:text-[29px] rtl:md:text-[37px] text-gray-900 md:!leading-relaxed tracking-normal relative after:absolute after:bg-gray-900 after:w-[20%] md:after:w-[7.5%] after:h-[0.2rem] after:rounded-full after:right-0 after:top-[-0.45rem] rtl:after:top-[-0.85rem] rtl:md:after:-top-5 ltr:md:after:-top-2 before:absolute before:bg-gray-900 before:w-[20%] md:before:w-[7.5%] before:h-[0.2rem] before:rounded-full before:left-0 before:bottom-[-10px] md:before:bottom-[-3px] ltr:md:before:bottom-[-0.6rem]"
        >
          <span className="bg-gray-900 rounded-full w-2.5 h-2.5 absolute top-[-1.05rem] md:-top-6 ltr:top-[-0.7rem] -right-1"></span>
          {tHome("company_features")}
          <span className="bg-gray-900 rounded-full w-2.5 h-2.5 absolute bottom-[-0.7789rem] md:bottom-[-7px] ltr:bottom-[-0.794rem] -left-1"></span>
        </motion.p>
      </div>
    </section>
  );
};

export default CompanyFeatures;
