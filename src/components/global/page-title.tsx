import React from "react";

type PageTitleProps = {
  children: React.ReactNode;
};

const PageTitle: React.FC<PageTitleProps> = ({ children }) => {
  return (
    <h2 className="font-medium text-center text-xl md:text-2xl leading-relaxed text-gray-100 pb-1.5 md:pb-2.5">
      {children}
    </h2>
  );
};

export default PageTitle;
