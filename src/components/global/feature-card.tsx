"use client";

import React from "react";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

type FeatureProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  variants: {
    hidden: { opacity: number };
    show: { opacity: number };
  };
};

const FeatureCard: React.FC<FeatureProps> = ({
  title,
  description,
  icon,
  variants,
}) => {
  return (
    <motion.div
      variants={variants}
      className="flex flex-col justify-center items-center text-center gap-3"
    >
      <div className="flex justify-center items-center bg-primary text-white rounded-lg p-3">
        {React.createElement(icon, {
          className: "w-11 h-11 md:w-[3.3rem] md:h-[3.3rem] dark:text-white",
          strokeWidth: 1.25,
        })}
      </div>
      <div>
        <h3 className="md:text-lg font-semibold pb-1 opacity-85 tracking-wide text-primary dark:text-white">
          {title}
        </h3>
        <p className="md:text-base">{description}</p>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
