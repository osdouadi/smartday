import React from "react";

type SectionSubheaderProps = {
  children: string;
};

const SectionSubheader: React.FC<SectionSubheaderProps> = ({ children }) => {
  return (
    <p className="text-base md:text-xl pb-4">{children}</p>
  );
};

export default SectionSubheader;
