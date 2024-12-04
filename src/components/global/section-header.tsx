import React from "react";

type SectionHeaderProps = {
  children: string;
};

const SectionHeader: React.FC<SectionHeaderProps> = ({ children }) => {
  return (
    <h2 className="text-xl md:text-2xl font-semibold tracking-wide mb-1.5">
      {children}
    </h2>
  );
};

export default SectionHeader;
