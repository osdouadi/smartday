import { getCategoryById } from "@/queries/category";
import { Metadata } from "next";
import React from "react";

export async function generateMetadata({
  params: { locale, categoryId },
}: {
  params: { locale: string; categoryId: string };
}): Promise<Metadata> {
  const metadata = await getCategoryById(categoryId);
  return {
    title:
      locale === "ar"
        ? metadata?.SEOSettings?.pageTitle?.ar
        : metadata?.SEOSettings?.pageTitle?.en,
    description:
      locale === "ar"
        ? metadata?.SEOSettings?.pageDescription?.ar
        : metadata?.SEOSettings?.pageDescription?.en,
  };
}

type CategoryLayoutProps = {
  children: React.ReactNode;
};

const CategoryLayout: React.FC<CategoryLayoutProps> = ({ children }) => {
  return <div className="pb-5">{children}</div>;
};

export default CategoryLayout;
