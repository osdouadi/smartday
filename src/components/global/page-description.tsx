import React from "react";

type PageDescriptionProps = {
  children: React.ReactNode;
};

const PageDescription: React.FC<PageDescriptionProps> = ({ children }) => {
  return (
    <p className="text-lg md:text-xl text-gray-300 md:leading-relaxed text-center">
      {children}
    </p>
  );
};

export default PageDescription;
