import React from "react";

type DashPageTitleProps = {
  title: string;
};

const DashPageTitle: React.FC<DashPageTitleProps> = ({ title }) => {
  return <h2 className="text-xl md:text-3xl pb-3 md:pb-0">{title}</h2>;
};

export default DashPageTitle;
