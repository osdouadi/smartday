import NewsContainer from "@/containers/dashboard/news-container";
import Stats from "@/containers/dashboard/stats";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col gap-6 md:gap-8">
      <Stats />
      <NewsContainer />
    </div>
  );
};

export default page;
