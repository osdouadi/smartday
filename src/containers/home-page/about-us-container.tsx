"use client"

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";

const AboutUsContainer = () => {
  const { locale } = useParams();
  const tHome = useTranslations("site.homePage")
  return (
    <section className="flex flex-col overflow-hidden shapedividers_com-3351 shapedividers_com-7860">
      <div className="relative w-full h-[55.555vw] md:h-[35.2vw] shapedividers_com-961">
        <Image
          src={"/assets/1.png"}
          alt="smartday"
          width={2000}
          height={2000}
          className="absolute w-full h-[55.555vw] md:h-[35.2vw]"
        />
        <div className="absolute w-full h-1/4 -bottom-4 bg-background/85 rounded-full blur-2xl z-10"></div>
        <div className="absolute w-full h-1/6 -bottom-4 bg-background/95 rounded-full blur-xl z-10"></div>
      </div>
      <motion.div
        initial={
          locale === "ar" ? { opacity: 0, x: 200 } : { opacity: 0, x: -200 }
        }
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full mt-7 px-3 rtl:pr-8 ltr:pl-8 md:px-14 md:rtl:pr-14 md:ltr:pl-14 pb-14 md:pb-24 z-20"
      >
        <h3 className="text-lg md:text-3xl font-bold tracking-wide pb-1">
          {tHome("about_us")}
        </h3>
        <p className="md:text-2xl md:leading-relaxed text-gray-100 relative after:absolute after:bg-gray-100 after:w-[0.2rem] after:h-[33%] after:rounded-full after:-right-4 ltr:after:-left-4 after:-top-5">
          <span className="bg-gray-100 rounded-full w-2.5 h-2.5 absolute -top-7 right-[-1.2rem] ltr:left-[-1.2rem]"></span>
          {tHome("about_us_content")}
        </p>
      </motion.div>
    </section>
  );
};

export default AboutUsContainer;
