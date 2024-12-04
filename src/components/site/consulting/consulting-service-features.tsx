"use client";

import React from "react";
import { useTranslations } from "next-intl";
import FeatureCard from "@/components/global/feature-card";
import { consultingServiceFeatures } from "@/lib/data";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const listItem = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const ConsultingServiceFeatures: React.FC = () => {
  const tHomePage = useTranslations("site.homePage");
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      className="flex flex-col justify-center gap-5 mx-auto py-8 md:pt-0 md:px-2 md:w-1/2"
    >
      {consultingServiceFeatures.map((item, index) => (
        <FeatureCard
          key={index}
          title={tHomePage(item.title)}
          description={tHomePage(item.description)}
          icon={item.icon}
          variants={listItem}
        />
      ))}
    </motion.div>
  );
};

export default ConsultingServiceFeatures;
