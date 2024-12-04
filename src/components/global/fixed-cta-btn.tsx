"use client";

import React from "react";
import Link from "next/link";
import { WhatsappIcon } from "react-share";

const FixedSupportCTA = () => {
  return (
    <div className="group fixed top-[85%] rtl:left-3 ltr:right-3 h-14 w-14 flex items-center justify-center rounded-full bg-[#25D366] text-white z-[999] cursor-pointer">
      <Link href={`https://wa.me/+966531222169`} target="_blank">
        <WhatsappIcon
          className="w-11 h-11 animate-wiggle rounded-full"
          strokeWidth={1.6}
        />
      </Link>
    </div>
  );
};

export default FixedSupportCTA;
