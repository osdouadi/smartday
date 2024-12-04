import React from "react";
import { getBlogById } from "@/queries/blog";
import { Metadata } from "next";

export async function generateMetadata({
  params: { locale, id },
}: {
  params: { locale: string; id: string };
}): Promise<Metadata> {
  const metadata = await getBlogById(id);
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

type BlogLayoutProps = {
  children: React.ReactNode;
};

const BlogLayout: React.FC<BlogLayoutProps> = ({ children }) => {
  return <div className="pb-5">{children}</div>;
};

export default BlogLayout;
