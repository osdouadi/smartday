"use client"

import React from 'react'
import Image from 'next/image';
import {motion} from "framer-motion"
import { useTranslations } from 'next-intl';

const OurTeamContainer = () => {
  const tHome = useTranslations("site.homePage")
  return (
    <section className="flex flex-col shapedividers_com-5347">
      <div className="relative w-full h-[80vw] md:h-[55vw]">
        <Image
          src={"/assets/5.png"}
          alt="smartday"
          width={2000}
          height={2000}
          className="absolute w-full h-full"
        />
        <div className="absolute w-full h-[40%] top-0 bg-gray-300/15 rounded-3xl blur-xl z-10"></div>
        <div className="absolute w-full h-1/4 -bottom-8 bg-background/85 rounded-full blur-2xl z-10"></div>
        <div className="absolute w-full h-1/6 -bottom-8 bg-background rounded-full blur-xl z-10"></div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full -mt-24 md:-mt-52 px-6 md:px-14 pt-7 md:pt-14 pb-6 md:pb-14 z-20"
      >
        <h3 className="text-lg md:text-3xl font-bold tracking-wide pb-2">
          {tHome("our_team")}
        </h3>
        <p className="md:text-2xl md:leading-relaxed text-gray-100">{tHome("our_team_content")}</p>
      </motion.div>
    </section>
  );
}

export default OurTeamContainer