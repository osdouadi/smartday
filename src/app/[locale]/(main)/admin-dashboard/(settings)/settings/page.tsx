import React from "react";
import SEOSettings from "@/containers/dashboard/settings/seo-settings";
const page = () => {
  return (
    <div className="w-full flex flex-col items-center mx-auto gap-8">
      <div className="w-full">
        <SEOSettings />
      </div>
    </div>
  );
};

export default page;
