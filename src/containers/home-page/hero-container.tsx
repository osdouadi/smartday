"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const HeroContainer: React.FC = () => {
  const tHomePage = useTranslations("site.homePage");

  return (
    <section className="relative w-full bg-transparent mt-6 md:!mt-7">
      <Image
        src={"/assets/asset_11.png"}
        alt="tours"
        height={600}
        width={600}
        className="opacity-30 md:mt-4 w-[18rem] md:!w-[24rem] lg:w-[30.6rem] md:h-auto"
      />
      <div className="w-full absolute top-[57%] md:top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-center px-3 md:!px-0 lg:mt-7">
        <motion.h3
          className="text-2xl md:!text-6xl lg:text-8xl font-semibold text-center !leading-tight tracking-wide mb-1.5 lg:mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          {tHomePage("hero_intro")}
        </motion.h3>
        <motion.p
          className="md:!w-[55%] lg:w-[57%] text-lg md:!text-2xl lg:text-3xl md:!leading-loose tracking-wide mb-8 mx-auto"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {tHomePage("hero_intro_description")}
        </motion.p>
      </div>
    </section>
  );
};

export default HeroContainer;
