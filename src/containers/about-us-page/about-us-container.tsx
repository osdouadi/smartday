import React from "react";
import Image from "next/image";
import PageDescription from "@/components/global/page-description";
import PageTitle from "@/components/global/page-title";
import { media } from "@/config/media";
import { useTranslations } from "next-intl";

const AboutUsContainer: React.FC = () => {
  const tAboutUs = useTranslations("site.aboutUsPage");
  return (
    <>
      <div className="h-[48vw] w-full md:h-[35vw] relative">
        <Image
          src={"/assets/1.png"}
          alt={"abak"}
          width={2000}
          height={2000}
          className="h-[48vw] w-full md:h-[35vw] absolute"
        />
      </div>
      <div className="py-5 px-4 md:p-10">
        <PageTitle>{tAboutUs("aboutUS")}</PageTitle>
        <PageDescription>{tAboutUs("content")}</PageDescription>
      </div>
    </>
  );
};

export default AboutUsContainer;
