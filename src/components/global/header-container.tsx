import React from "react";

type HeaderContainerProps = {
  children: React.ReactNode;
};

const HeaderContainer: React.FC<HeaderContainerProps> = ({ children }) => {
  return (
      <div className="fixed top-0 right-0 left-0 py-3 px-4 flex items-center justify-between bg-card z-[9]">
        {children}
      </div>
  );
};

export default HeaderContainer;
