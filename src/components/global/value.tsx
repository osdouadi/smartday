import Image from "next/image";
import React from "react";

type valueProps = {
  title: string;
  iconPath: string;
};

const Value: React.FC<valueProps> = ({ title, iconPath }) => {
  return (
    <div className="flex items-center flex-col gap-3">
      <Image
        src={iconPath}
        alt="sd"
        width={700}
        height={700}
        className="w-[2.66rem] md:w-[3.6rem] h-auto"
      />
      <h3 className="text-gray-800 text-base font-bold md:text-lg tracking-wide">
        {title}
      </h3>
    </div>
  );
};

export default Value;
