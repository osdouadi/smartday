"use client"

import Value from "@/components/global/value";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";


const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  },  
};

const listItem = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
};

const ValuesContainer = () => {
  const tHome = useTranslations("site.homePage")

  return (
    <section className="relative bg-gray-100 text-gray-900 py-6 md:pb-14 px-3  md:px-12 overflow-hidden">
      <Image
        src={"/assets/asset_09.png"}
        alt="smartday"
        width={1000}
        height={1000}
        className="w-[11rem] md:w-[25rem] absolute top-0 right-0 opacity-85"
      />
      <div className="flex flex-col items-center">
        <div className="w-fit border-2 border-gray-900 rounded-sm px-4 py-2 mb-6 md:mb-12 md:px-8 md:py-2.5 relative bg-gray-100 z-40 after:absolute after:w-full after:h-full after:border-2 after:border-transparent after:border-r-gray-900 after:border-b-gray-900 after:bg-transparent after:rounded-sm after:right-[-0.3622rem] after:bottom-[-0.428rem] md:after:-right-1 md:after:-bottom-1 after:z-20">
          <h3 className="text-gray-900 text-lg md:text-3xl mt-1">
            {tHome("our_values")}
          </h3>
        </div>
        <p className="text-lg md:text-2xl text-gray-900 font-semibold tracking-wide text-center pb-2 md:py-2.5">
         {tHome("our_values_header")}
        </p>
        <p className="text-base md:text-xl text-center text-gray-800 pb-4 md:pb-8">
         {tHome("our_values_subheader")}
        </p>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          transition={{ duration: 0.4 }}
          className="flex items-center justify-center flex-wrap gap-y-4 gap-8 md:gap-16"
        >
          <motion.div variants={listItem} transition={{ duration: 0.4 }}>
            <Value title={tHome("excellence")} iconPath={"/assets/badge.svg"} />
          </motion.div>
          <motion.div variants={listItem} transition={{ duration: 0.4 }}>
            <Value title={tHome("innovation")} iconPath={"/assets/light.svg"} />
          </motion.div>
          <motion.div variants={listItem} transition={{ duration: 0.4 }}>
            <Value title={tHome("integrity")} iconPath={"/assets/safety.svg"} />
          </motion.div>
          <motion.div variants={listItem} transition={{ duration: 0.4 }}>
            <Value
              title={tHome("clients_first")}
              iconPath={"/assets/clients.svg"}
            />
          </motion.div>
          <motion.div variants={listItem} transition={{ duration: 0.4 }}>
            <Value
              title={tHome("collaboration")}
              iconPath={"/assets/solid.svg"}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ValuesContainer;
