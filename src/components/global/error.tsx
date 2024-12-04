import { media } from "@/config/media";
import Image from "next/image";
import React from "react";

const Error = () => {
  return (
    <div>
      <Image
        src={media.images.errors.noData}
        alt="error"
        width={400}
        height={400}
      />
    </div>
  );
};

export default Error;
