import Image from "next/image";
import React from "react";

type BannerProps = {
  src: string;
  alt: string;
};

const Banner: React.FC<BannerProps> = ({ src, alt }) => {
  return (
    <div className="h-[57vw] w-full md:h-[35vw] relative">
      <Image
        src={src}
        alt={alt}
        fill
        className="h-[52.5vw] w-full md:h-[35vw] absolute"
      />
    </div>
  );
};

export default Banner;
