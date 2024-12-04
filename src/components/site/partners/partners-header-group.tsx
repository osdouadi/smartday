import SectionHeader from "@/components/global/section-header";
import SectionSubheader from "@/components/global/section-subheader";
import { useTranslations } from "next-intl";
import React from "react";

const PartnersHeaderGroup: React.FC = () => {
  const tHeaderGroup = useTranslations("site.headerGroups");

  return (
    <>
      <div className="text-gray-900">
        <SectionHeader>{tHeaderGroup("partnersHeader")}</SectionHeader>
      </div>
      <div className="text-gray-900/90 font-semibold">
        <SectionSubheader>{tHeaderGroup("partnersSubheader")}</SectionSubheader>
      </div>
    </>
  );
};

export default PartnersHeaderGroup;
