import { getMetadata } from "@/queries/app-settings";
import { Metadata } from "next";
import React from "react";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const metadata = await getMetadata();
  return {
    title:
      locale === "ar"
        ? metadata?.aboutUsPageMetadata?.title?.ar
        : metadata?.aboutUsPageMetadata?.title?.en,
    description:
      locale === "ar"
        ? metadata?.aboutUsPageMetadata?.description?.ar
        : metadata?.aboutUsPageMetadata?.description?.en,
  };
}

type AboutUsLayout = {
  children: React.ReactNode;
};

const AboutUsLayout: React.FC<AboutUsLayout> = ({ children }) => {
  return children;
};

export default AboutUsLayout;
