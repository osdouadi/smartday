"use client";

import React from "react";
import AgencyInfoCard from "@/components/global/agency-info-card";
import CustomMap from "@/components/ui/Map";
import { agencyInfo } from "@/lib/data";
import SectionHeader from "@/components/global/section-header";
import SectionSubheader from "@/components/global/section-subheader";
import { useTranslations } from "next-intl";

const AgencyInfoContainer: React.FC = () => {
  const tAgencyInfo = useTranslations("site.homePage.agencyInfo")

  return (
    <section className="relative w-full flex flex-col-reverse md:flex-row gap-10 overflow-hidden bg-secondary">
      <div className="w-full md:w-1/2 h-[18rem] md:h-[32.5rem] overflow-hidden">
        <CustomMap />
      </div>
      <div className="relative md:h-[32.5rem] md:w-1/2 flex flex-col justify-center items-center gap-4 px-5 pt-6 pb-2 md:py-6">
        <div className="text-primary text-center">
          <SectionHeader>{tAgencyInfo("get_in_touch")}</SectionHeader>
          <SectionSubheader>
            {tAgencyInfo("get_in_touch_description")}
          </SectionSubheader>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-7">
          {agencyInfo.map((item, index) => (
            <AgencyInfoCard
              key={index}
              details={item.details}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgencyInfoContainer;
