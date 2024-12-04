import React from "react";

type SlikyItemProps = {
  children: React.ReactNode;
};

const SlikyItem: React.FC<SlikyItemProps> = ({ children }) => {
  return <div className="h-[11.5rem] md:h-[18rem] mx-1">{children}</div>;
};

export default SlikyItem;
